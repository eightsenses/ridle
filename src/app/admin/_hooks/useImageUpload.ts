import { supabase } from '@/utils/supabase';
import { useState, ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const BUCKET = 'session_thumbnail';

export const useImageUpload = (initialUrl?: string | null) => {
  const [thumbnailImageKey, setThumbnailImageKey] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(initialUrl ?? null);
  const [imageRemoved, setImageRemoved] = useState(false);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) return;

    // 保存前に別の画像を選び直した場合、直前にアップロードした未使用ファイルを削除
    if (thumbnailImageKey) {
      const { error } = await supabase.storage.from(BUCKET).remove([thumbnailImageKey]);
      if (error) {
        alert('前の画像の削除に失敗しました');
        return;
      }
    }

    const file = event.target.files[0];
    const filePath = `private/${uuidv4()}`;

    const { data, error } = await supabase.storage
      .from(BUCKET)
      .upload(filePath, file, { cacheControl: '3600', upsert: false });

    if (error) {
      toast.error(error.message);
      return;
    }
    setThumbnailImageKey(data.path);
    setPreviewUrl(supabase.storage.from(BUCKET).getPublicUrl(data.path).data.publicUrl);
    setImageRemoved(false);
  };

  // --- 削除 ---
  // Storageからファイルを削除し、keyをクリア
  const handleImageRemove = async () => {
    if (thumbnailImageKey) {
      const { error } = await supabase.storage.from(BUCKET).remove([thumbnailImageKey]);
      if (error) {
        alert(error.message);
        return;
      }
    }
    setThumbnailImageKey('');
    setPreviewUrl(null);
    setImageRemoved(true);
  };

  // --- プレビューURL ---
  const thumbnailImageUrl = thumbnailImageKey
    ? supabase.storage.from(BUCKET).getPublicUrl(thumbnailImageKey).data.publicUrl
    : previewUrl;

  return {
    thumbnailImageKey, // APIに送る値
    thumbnailImageUrl, // プレビュー表示用
    imageRemoved, // 既存画像を削除したかどうか
    handleImageChange, // <input onChange>
    handleImageRemove, // 削除ボタン onClick
    cleanup: handleImageRemove // アップロード済みだが未保存の画像を削除
  };
};
