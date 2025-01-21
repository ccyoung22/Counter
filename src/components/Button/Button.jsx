import { useState } from "react";

import "./Button.css";

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      This button has been clicked {count} times
    </button>
  );
}

export default function ButtonDiv() {
  return (
    <div>
      <Button />
    </div>
  );
}
