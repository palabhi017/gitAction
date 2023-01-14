import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
const JS = () => {
    const [item,setitem] = useState([])

    const getdata= async () =>{
    
      let res = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:Javascript`)
      let data = await res.json()
      setitem(data.items)
    }
    useEffect(()=>{
      getdata()
    },[])
      return (
        <div>
             <Navbar/>
        <div className="App" style={{display:"grid",gridTemplateColumn:'repeat(4,25%)',width:"100%",justifyContent:"space-evenly"}}>
    
          {item.map((e)=>( 
            <div key={e.id} style={{width:"100%",border:"2px solid black",marginTop:"10px",borderRadius:"10px"}}>
              
                <h3>{e.name}</h3>
                <p>{e.language}</p>
                <p>{e.stargazers_count}</p>
                <p>{e.forks_count}</p>
    
            </div>
    
          ))}
        </div>
        </div>
      )
}

export default JS