import React, {useState} from 'react'

function App() {
  const [data, setData] = useState({
    username: "",
    password: ""
  })

  const {username, password} = data 

  // useEffect(() => {
  //   setData(data.username)
  // }, [data.username])
  
const onChange = (event) => {
  setData(event.target.value);
  // setData(prevState=>{username:prevstate.username});
}
  const submitHandler =(event) => {
    event.preventDefault()
    console.log(data)
  }


  return (
    <div>
      <div>
        <center>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={username}
              placeholder="username"
              onChange={onChange}
            />{" "}
            <br />
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={onChange}
            />{" "}
            <br />
            <button type="submit">Login </button>
          </form>
        </center>
      </div>
    </div>
  );
}

export default App
