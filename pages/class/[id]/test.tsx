import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import TodoList from "./feature/todo/components/TodoList";


function App() {

  const url = "https://6106a7f21f348700174379e0.mockapi.io/name/"
  const [userlist, setuserlist] = useState([])
  const [data, setdata] = useState({
    name: "",
    role: "",
  })
  function submit(e) {
    e.preventDefault();
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        const mydata = [...userlist, res.data]
        setuserlist(mydata)
      }).catch(err => console.error(err))
  }
  const fetch = async function () {
    const res = await axios.get(url)

    setuserlist(res.data)
  }
  useEffect(
    () => {

      fetch()
    }, []
  )

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setdata(newdata)
  }

  function remove(id) {
    console.log(id)
    axios.delete(url + id)
      .then(res => {
        console.log(res.data)
        const alluser = userlist.filter(item => item.id !== id)
        setuserlist(alluser)
      }).catch(err => console.error(err))
  }

  const display = userlist.map(item =>
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.role}</td>
      <td><button className="btn btn-success" > update</button></td>
      <td><button onClick={() => remove(item.id)} className="btn btn-danger" > delete</button></td>

    </tr>
  )

  return (
    <div className="App">
      <form onSubmit={(e) => submit(e)}>
        <div>
          <label htmlFor="user"> user</label>
          <input onChange={(e) => handle(e)} value={data.name} type="text" name="name" id="name" placeholder="name" />

        </div>
        <div>
          <label htmlfor="user"> user</label>
          <input onChange={(e) => handle(e)} value={data.role} type="text" name="role" id="role" placeholder="role" />

        </div>
        <button className="btn btn-primary">submit</button>
      </form>
      <table>
        <tbody>
          {display}
        </tbody>
      </table>
    </div>
  );
}

export default App;