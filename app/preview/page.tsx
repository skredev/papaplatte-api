import { useSearchParams } from 'next/navigation';

export default function Preview({
  searchParams,
}: {
  searchParams: { [id: string]: string | string[] | undefined }
}) {
  return (
    <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
      <img src={`../../images/${searchParams.id}.jpg`} alt={""} />
    </div>
  );
}