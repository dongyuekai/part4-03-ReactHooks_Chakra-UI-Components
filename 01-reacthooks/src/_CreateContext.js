// createContext 传值方式
import React, { createContext } from 'react'
const countContext = createContext()

function _CreateContext() {
  return (
    <countContext.Provider value={100}>
      <Foo />
    </countContext.Provider>
  )
}
function Foo() {
  return (
    <countContext.Consumer>
      {
        value => {
          return (
            <div>{value}</div>
          )
        }
      }
    </countContext.Consumer>
  )
}
export default _CreateContext