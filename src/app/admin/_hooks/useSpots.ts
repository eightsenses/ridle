import useSWR from 'swr';

interface Spot {
  id: number;
  name: string;
}

export const useSpots = (token?: string | null) => {
  const fetcher = async (url: string) => {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) throw new Error('スポットの取得に失敗しました');
    const data = await res.json();
    return data.spots as Spot[];
  };
  return useSWR<Spot[]>(token ? '/api/admin/spot' : null, fetcher);
};
