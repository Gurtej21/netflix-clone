import React from 'react';
import './Navbar.css';


const Navbar = () =>{

  return(
     <div className='navbar'>
        <img  
        className='navbar__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
        />

        <button className="Login-button" >LOGIN</button>
        <button className="signup-button" >SIGNUP</button>
     </div>


  )
}
export default Navbar;


// function Navbar() {
//   return (
//     <div className="navbar">
//       <img 
//         className="navbar__logo"
//         src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
//         alt="Netflix Logo" 
//       />
//       <img 
//         className="navbar__avatar"
//         src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
//         alt="Netflix Avatar"
//       />
//     </div>
//   );
// }

// export default Navbar;
