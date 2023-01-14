import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div style={{width:"100%",backgroundColor:"#999",display:"flex",justifyContent:"space-evenly",color:"#333",height:"60px",alignItems:"center"}}>
        <Link style={{color:"#fff",fontWight:"bold",fontSize:"20px"}} to="/">All</Link>
        <Link style={{color:"#fff",fontWight:"bold",fontSize:"20px"}} to="/Css">CSS</Link>
        <Link style={{color:"#fff",fontWight:"bold",fontSize:"20px"}} to="/HTML">HTML</Link>
        <Link style={{color:"#fff",fontWight:"bold",fontSize:"20px"}} to="/Javascript">Javascript</Link>
    </div>
  )
}

export default Navbar