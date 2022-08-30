import React, { useCallback, useState } from 'react'

export default function App() {
  const [myState, setMyState] = useState("Hello world")
  const [fleg, setFleg]=useState(false)
  const myFunc=useCallback(()=>{
    console.log(myState);
  }, [flag])
  return (
    <div>
      <h1>{myState}</h1>
      <button onClick={()=>myFunc()}>Invoke useCallBack</button>
      <button onClick={()=>setMyState(myState + "A")}>chagde my state</button>
      <button onClick={()=>setFleg(!fleg)}>Invoke useCallBack</button>

    </div>....
  )
}

    <div>
      {/* <Routes>
        <Route path={"/"} element={<h1>Welcome</h1>}></Route>
        <Route path={"/drop-down"} element={<h1>Dropdown</h1>}></Route>
        <Route path={"/google"} element={<h1>Google</h1>}></Route>
        <Route path={"/text"} element={<h1>Text</h1>}></Route>
        </Routes>
    <div>
      <Link to={"/"}>
        <h1>Welcome</h1>
      </Link>
      <Link to={"/counter"}>
        <h1>Counter</h1>
      </Link>
      <Link to={"/dropdown"}>
        <h1>Drop-down</h1>
      </Link>
      <Link to={"/list"}>
        <h1>To do list</h1>
      </Link>
    </div> */}


    </div>
