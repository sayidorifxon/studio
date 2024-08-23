import React, { useEffect, useReducer, useState } from 'react'
import "../styles/users.css"
function Users() {
    const [users, setUsers]=useState(null)
    const [ignored, forceUpdate]=useReducer(x=>x+1, 0)
    useEffect(()=>{
        getUsers()
    }, [ignored])
    async function getUsers(){
        let fetchUsers = await fetch("https://landing-page-backend-1.onrender.com/users")
        let json = await fetchUsers.json()
        setUsers(json.data)
        forceUpdate()
    }
    function deleteUser(e){
        fetch(`https://landing-page-backend-1.onrender.com/users/${e.target.id}`, {
            method:"DELETE"
        })
        forceUpdate()
    }
  return (
    <div className='users'>
      {users?.map((item)=>{
        return(
            <div className="users__card" key={item?._id}>
            <h4>{item?.username}</h4>
            <h5>{item?.email}</h5>
            <button id={item?._id} onClick={(e)=>deleteUser(e)}>delete</button>
            </div>
        )
      })}
    </div>
  )
}

export default Users
