import React from "react";
// import ReactDOM from 'react-dom'

export default function App() {

  const [count ,setCount] = React.useState(0)
  const [persons,setPerson]=React.useState([])

  const handleClick=()=>{
    setCount(count+1)
  }

  const gain = ()=>{
    setPerson([
      {id:1,name:'ss'},...persons
    ])
  }

  React.useEffect(()=>{
    console.log('useEfffect+')
  },[count])

  // const 
  
    return (
      <div>
        <h1>count: {count}</h1>
        <button onClick={handleClick}>按钮</button>
        <ul>
          {
            persons.map(person=><li key={person.id}>{person.name}</li>)
          }
        </ul>
        <button onClick={gain}>获取数据</button>
      </div>
    );
}
