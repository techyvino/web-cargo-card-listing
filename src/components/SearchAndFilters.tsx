import { Input, Select, SelectItem } from "@nextui-org/react";
import { Search } from "lucide-react";

interface FilterProps {
  search: string;
  status: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const SearchAndFilters = ({
  search,
  status,
  setSearch,
  setStatus,
  setPage,
}: FilterProps) => {
  const options = [
    {
      label: "All",
      value: "",
    },
    {
      label: "Alive",
      value: "alive",
    },
    {
      label: "Dead",
      value: "dead",
    },
    {
      label: "Unknown",
      value: "unknown",
    },
  ];
  return (
    <div className="flex gap-10 mx-5">
      <Input
        startContent={<Search />}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        size="lg"
        name="search"
        id="query"
        placeholder="Search Characters..."
      />
      <Select
        name="status"
        size="sm"
        label="Status"
        placeholder="Select Status"
        className="max-w-xs"
        selectedKeys={[status]}
        onChange={(e) => {
          setStatus(e.target.value);
          setPage(1);
        }}
      >
        {options.map((status) => (
          <SelectItem key={status.value} value={status.value}>
            {status.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SearchAndFilters;
