import { Select } from "./ui/select";

type Props = {
  filter: string;
  setFilter: (value: string) => void;
};

export default function SelectControl({ filter, setFilter }: Props) {
  return (
    <div className="mb-4">
      <label className="mr-2 font-medium">Filter by:</label>
      <Select value={filter} onChange={setFilter} />
    </div>
  );
}
