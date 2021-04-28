import React from 'react'
import ReactDOM from 'react-dom';

let state = [];
let setters = [];
let stateIndex = 0;

function createSetter(index) {
  return function (newState) {
    state[index] = newState;
    render();
  }
}
function useState(initialState) {
  state[stateIndex] = state[stateIndex] ? state[stateIndex] : initialState;
  setters.push(createSetter(stateIndex));
  let value = state[stateIndex];
  let setter = setters[stateIndex];
  stateIndex++;
  return [value, setter];
}
function render() {
  stateIndex = 0;
  ReactDOM.render(<_UseYL />, document.getElementById('root'));
}

// 上一次的依赖值
let prevDepsAry = [];
let effectIndex = 0;

function useEffect(callback, depsAry) {
  // 判断callback是不是函数
  if (Object.prototype.toString.call(callback) !== '[object Function]') throw new Error('useEffect函数的第一个参数必须是函数');
  // 判断depsAry有没有被传递
  if (typeof depsAry === 'undefined') {
    // 没有传递
    callback();
  } else {
    // 判断depsAry是不是数组
    if (Object.prototype.toString.call(depsAry) !== '[object Array]') throw new Error('useEffect函数的第二个参数必须是数组');
    // 获取上一次的状态值
    let prevDeps = prevDepsAry[effectIndex];
    // 将当前的依赖值和上一次的依赖值做对比 如果有变化 调用callback
    let hasChanged = prevDeps ? depsAry.every((dep, index) => dep === prevDeps[index]) === false : true;
    // 判断值是否有变化
    if (hasChanged) {
      callback();
    }
    // 同步依赖值
    prevDepsAry[effectIndex] = depsAry;
    effectIndex++;
  }
}
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState)
  function dispatch(action) {
    const newState = reducer(state, action)
    setState(newState)
  }
  return [state, dispatch]
}


// useState useEffect useReducer 原理
function _UseYL() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('zhangsan')

  useEffect(() => {
    console.log('count值发生了变化~~')
  }, [count])

  useEffect(() => {
    console.log('name值发生了变化~~')
  }, [name])

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      default:
        return state
    }
  }

  const [age, dispatch] = useReducer(reducer, 20)

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>setCount</button><br />
      { name}<br />
      <button onClick={() => setName('lisi')}>setName</button><br />
      年龄：{age}<br />
      <button onClick={() => { dispatch({ type: 'increment' }) }}>age+1</button><br />
      <button onClick={() => { dispatch({ type: 'decrement' }) }}>age-1</button><br />
    </div >
  )
}
export default _UseYL