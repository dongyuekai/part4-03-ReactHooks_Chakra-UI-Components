import React, { useState, useRef, useEffect } from 'react'

// 用useRef简单获取组件
// function _UseRef() {
//   const _input = useRef()
//   const handler = () => console.log(_input.current.value)
//   return (
//     <input ref={_input} onChange={handler} />
//   )
// }

function _UseRef() {
  const [count, setCount] = useState(0)

  // 这里用useRef保存timerId 这个值不会因为组件重新渲染而丢失

  let timerId = useRef()
  useEffect(() => {
    startInterval()
  }, [])

  const startInterval = () => {
    timerId.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }
  const stopCount = () => {
    console.log(timerId)
    clearInterval(timerId.current)
  }
  const continueCount = () => {
    startInterval()
  }
  return (
    <div>
      {count}
      <button onClick={stopCount}>停止</button>
      <button onClick={continueCount}>继续</button>
    </div>
  )
}

export default _UseRef