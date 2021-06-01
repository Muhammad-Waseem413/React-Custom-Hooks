import React from "react";

export default function useDebounce(inputValue, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(inputValue);

  React.useEffect(() => {
    const delayHandler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(delayHandler);
    };
  }, [delay, inputValue]);

  return debouncedValue;
}
