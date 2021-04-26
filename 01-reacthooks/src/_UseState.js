import React, { useState } from 'react'
function _UseState() {
  const [count, setCount] = useState(0)

  function handleCount() {
    setCount(count => {
      const newCount = count + 1
      document.title = newCount
      return newCount
    })
    // 在这里写 title 值会延迟显示 表示setCount是异步的
    // document.title = count
  }

  return (
    <div className="App">
      <span>{count}</span>
      {/* <button onClick={() => setCount(count + 1)}>setCount</button> */}
      <button onClick={handleCount}>setCount</button>
    </div>
  );
}

export default _UseState;
