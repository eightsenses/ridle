'use client';

interface PageHeaderProps {
  title: string;
  text?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, text }) => {
  return (
    <div className="mt-4 grid justify-center gap-4">
      <h1 className="text-center text-4xl font-bold">{title}</h1>
      <p className="text-semantic-text-gray">{text}</p>
    </div>
  );
};
export default PageHeader;
