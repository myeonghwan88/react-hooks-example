import React from "react";

export default function Example5() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // console.log("componentDidMount, componentDidUpdate", count);
    // }); // 랜더 된 직후에는 바로 실행
    console.log("componentDidMount");
    return () => {
      // cleanUp
      // componentWillUnmount
    };
  }, []); // 최초에만 실행 된다. 배열의 의미는 해당 값일 때 실행 되어라 의미

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);
    return () => {
      // cleanUp
      console.log("cleanUp by count", count);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
