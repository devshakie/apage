import { useState } from 'react'
import React from 'react'
import{Link} from 'react-router-dom'
const Navbar = () => {
  const[openMenu,setOpenmenu]=useState(false)
  const menuOptions=[{
    text:"about",
  
  },
  {
    text:"Speaking"
  },
  {
    text:"Writing"
  },
  {
    text:"Uses"
  },
  {
    text:"Contact"
  },
]
  return (
    <nav >
      
      <div className='navbar-links-container'>
<a href="">Contact</a>
<a href="">Uses</a>
<a href="">Writing</a>
<a href="">speaking</a>
<a href="">About</a>
    

      </div>
      <div className='navbar-menu-container'>
        < div onclick={()=> setOpenmenu(true)}/>
      </div>
     
    </nav>
  )
}

export default Navbar

