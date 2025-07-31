import Input from "@/components/ui/Input";

export function FilterBar({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="mb-6 flex gap-4">
      <Input
        placeholder={placeholder || "Filtrar..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-md"
      />
    </div>
  );
}
