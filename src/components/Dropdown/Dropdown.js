import Select from "react-select";

const genres = [
  { value: "Action", label: "Action" },
  { value: "Drama", label: "Drama" },
  { value: "Comedy", label: "Comedy" },
  { value: "Horror", label: "Horror" },
];

const Dropdown = () => {
  return <Select defaultValue={genres[0]} options={genres} />;
};

export default Dropdown;
