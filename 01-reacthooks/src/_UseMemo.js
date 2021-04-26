import React, { useState, useMemo } from 'react'


function _UseMemo() {

  const [count, setCount] = useState(0)
  const [bool, setBool] = useState(true)

  const result = useMemo(() => {
    console.log('111')
    return count * 2
  }, [count])
  
  return (
    <div>
      <span>{count}-{result}</span>
      <span>{bool ? '真' : '假'}</span>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setBool(!bool)}>setBool</button>
    </div>
  )
}

export default _UseMemo
