// createContext 传值方式
import React, { createContext, useContext } from 'react'

// 通过createContext函数实例化
const countContext = createContext()

function _CreateContext() {
  return (
    <countContext.Provider value={100}>
      <Foo />
    </countContext.Provider>
  )
}
function Foo() {
  // 取到值
  const value = useContext(countContext)
  return (
    <div>{value}</div>
  )
}
export default _CreateContext