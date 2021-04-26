import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function _UseEffect() {

  // const [count, setCount] = useState(0)
  // const [person, setPerson] = useState({ name: 'dyk', age: 33 })
  // const [hobby, setHobby] = useState({ name: 'basketball' })

  // 无第二个参数 会在组件加载完成和组件数据更新的时候执行
  // useEffect(() => {
  //   console.log('123')
  // })
  // 第二个参数是空数组 会在罪案加载完成调用一次
  // useEffect(() => {
  //   console.log('123')
  // }, [])

  // 卸载组件之前执行
  // useEffect(() => {
  //   return () => {
  //     console.log('卸载组件')
  //   }
  // })

  // function onScroll() {
  //   console.log('页面发生滚动了~~~~')
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll)
  //   return () => {
  //     window.removeEventListener('scroll', onScroll)
  //   }
  // }, [])

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCount(count => count + 1)
  //   }, 1000)
  //   return () => {
  //     clearInterval(timerId)
  //   }
  // }, [])

  // useEffect(() => {
  //   console.log('dyk--count--', count)
  // }, [count, person])

  function getData() {
    return new Promise(resolve => {
      resolve({ msg: 'Hello' })
    })
  }

  useEffect(() => {
    // getData().then(res => {
    //   console.log(res)
    // })
    // 如何在useEffect中使用异步函数
    (
      async function () {
        const res = await getData()
        console.log(res)
      }
    )()
  }, [])

  return (
    <div className="App">
      {/* <span>{count}</span><br />
      <span>{person.name}</span><br />
      <span>{hobby.name}</span><br />

      <button onClick={() => { setCount(count + 1) }}>setCount</button>
      <button onClick={() => { setPerson({ name: 'lisi', age: 33 }) }}>setPerson</button>
      <button onClick={() => { setHobby({ name: 'football' }) }}>setHobby</button> */}

      {/* <button onClick={() => { ReactDOM.unmountComponentAtNode(document.getElementById('root')) }}>卸载组件</button> */}


    </div>
  );
}

export default _UseEffect;
