import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import usePrevious from "../hooks/usePrevious";
import useDebounce from "../hooks/useDebounce";

export default function HooksPlayground() {
  const [name, setName] = useLocalStorage("name", "");

  const debouncedInput = useDebounce(name, 500);

  const prevValue = usePrevious(name);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div>Previous Value: {prevValue}</div>
      <div>Debounced Value: {debouncedInput}</div>
    </div>
  );
}
