import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import usePrevious from "../hooks/usePrevious";

export default function HooksPlayground() {
  const [name, setName] = useLocalStorage("name", "");

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
    </div>
  );
}
