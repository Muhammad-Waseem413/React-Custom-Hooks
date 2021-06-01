import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import usePrevious from "../hooks/usePrevious";
import useDebounce from "../hooks/useDebounce";

export default function HooksPlayground() {
  const [name, setName] = useLocalStorage("name", "");
  const [searchInput, setSearchInput] = React.useState("");

  const debouncedInput = useDebounce(name, 1000);

  React.useEffect(() => {
    setSearchInput(debouncedInput);
  }, [debouncedInput]);

  const prevValue = usePrevious(searchInput);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div>Previous Search: {prevValue}</div>
      <div>Debounced Value: {debouncedInput}</div>
    </div>
  );
}
