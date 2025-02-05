// import { useState } from "react";
// import './login.css';

// function LoginPortal() {
//     const [name,setName] = useState();
//     const [email,setEmail] = useState();
//     const [pass,setPass] = useState();
//     const [type,setType] = useState();
//   const clicked = () => {
//     fetch('http://127.0.0.1:8000/api/post-data/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name: name, email: email, pass: pass, type:type }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log('Success:', data))
//       .catch((error) => console.error('Error:', error));
//     nav("/feed")
//   }

//   return (
//     <>
//       <div className="container">
//         <img alt="finger-Print" />
//         <form action="" className="Form">
//           <input type="text" placeholder="Enter your User Name" onChange={(e) => {setName(e.target.value)}}/>
//           <input type="email" name="email" id="email" placeholder="Enter your Email" onChange={(e) => {setEmail(e.target.value)}}/>
//           <input type="password" name="password" id="password" placeholder="Enter Password" onChange={(e) => {setPass(e.target.value)}}/>
//           <select name="drop" id="drop" onChange={(e) => {setType(e.target.value)}}>
//             <option value="--Select User Type--">--Select User Type--</option>
//             <option value="Chef">Chef</option>
//             <option value="Foodie">Foodie</option>
//           </select>
//           <button type="submit" href='/feed' onClick={() => clicked()}>Submit</button>
//         </form>
//         <p id="info">By creating an account, you agree and accept our 
//           <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
//         </p>
//         <hr id='line'/>
//         <a href="#" id="error">Forgot Password</a>
//       </div>
//     </>
//   );
// }

// export default LoginPortal;


import fingerprint from './assets/fingerprint.png'
import cooking from './assets/cooking.mp4'
import { useState } from "react";
import './login.css'
import {useNavigate} from 'react-router-dom'
function LoginPortal(){
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [pass,setPass] = useState();
    const [type,setType] = useState();
  const clicked = () => {
    fetch('http://127.0.0.1:8000/api/post-data/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name, email: email, pass: pass, type:type }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
    nav("/feed")
  }
    const nav = useNavigate();
    return(
        <>
        <div className="body">
            <div className="container">
                <img src={fingerprint} alt="finger-Print" id='login-img'/>
                <form action="" className="Form">
                <input type="text" placeholder="Enter your User Name" className="inp-login" onChange={(e) => {setName(e.target.value)}}/>
                <input type="email" name="email" className="inp-login" placeholder="Enter your Email" onChange={(e) => {setEmail(e.target.value)}}/>
                <input type="password" name="password" className="inp-login" placeholder="Enter Password" onChange={(e) => {setPass(e.target.value)}}/>
                <select name="drop" id="drop">
                        <option value="--Select User Type--">--Select User Type--</option>
                        <option value="Chef">Chef</option>
                        <option value="Foodie">Foodie</option>
                    </select>
                    <button type="submit" href='/feed' id='btn-login' onClick={() => clicked()}>Submit</button>
                </form>
                <p id="info">By creating an account, you agree and accept our 
                    <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                </p>
                <hr id='line'/>
                <a href="#" id="error">Forgot Password</a>
                
            </div>
            </div>
        </>
    );
}

export default LoginPortal;