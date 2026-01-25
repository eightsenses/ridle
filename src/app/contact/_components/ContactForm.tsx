'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '@/schemas/contact';
import { InputField, TextareaField, SubmitButton } from '@/app/_components/form';

interface ContactFormProps {
  onSubmit: (data: ContactFormData, reset: () => void) => void;
  buttonText: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, buttonText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data, reset))} className="grid gap-6">
      <div className="w-full">
        <InputField
          label="お名前"
          type="text"
          placeholder="山田太郎"
          field="name"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.name?.message}
        />
      </div>
      <div>
        <InputField
          label="メールアドレス"
          type="email"
          placeholder="メールアドレス"
          field="email"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.email?.message}
        />
      </div>

      <div>
        <TextareaField
          label="お問い合わせ内容"
          field="message"
          register={register}
          isSubmitting={isSubmitting}
          error={errors.message?.message}
        />
      </div>

      <SubmitButton type="submit" isSubmitting={isSubmitting}>
        {buttonText}
      </SubmitButton>
    </form>
  );
};
export default ContactForm;
