import { useState, createRef, useRef } from "react";

export default function Example8() {
  const [value, setValue] = useState("");
  const input1Ref = createRef();
  const input2Ref = useRef();

  console.log(input1Ref.current, input2Ref.current);

  return (
    <div>
      <input placeholder="controlled" value={value} onChange={change} />
      <input placeholder="Uncontrolled createRef" ref={input1Ref} />
      <input placeholder="Uncontrolled useRef" ref={input2Ref} />
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
