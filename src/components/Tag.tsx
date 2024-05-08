interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <div className="bg-light-blue p-2 rounded-md mr-3">
      <span className="text-yellow-light font-medium text-xs">{label}</span>
    </div>
  );
}
