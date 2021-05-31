import React from "react";

export default function usePrevious(value, initialValue) {
  const ref = React.useRef(initialValue);

  React.useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
