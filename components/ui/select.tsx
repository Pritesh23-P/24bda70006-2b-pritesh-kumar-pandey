type SelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export function Select({ value, onChange }: SelectProps) {
  return (
    <select
      className="border rounded px-3 py-2 w-64"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="all">All Products</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
    </select>
  );
}
