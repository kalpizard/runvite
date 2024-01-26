
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = ({ setCurrUser, setShow }) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const signup = async (userInfo) => {
    const url = "http://localhost:3000/signup";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error);
      }

      localStorage.setItem("token", response.headers.get("Authorization"));
      const data = await response.json();
      setCurrUser(data);
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    

    // Validate password length
    if (data.password.length < 6) {
      // Display an error message or handle it as needed
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    
    localStorage.setItem('data', JSON.stringify(data));
    const userInfo = {
      user: { email: data.email, password: data.password, user_name: data.name},
    };

    console.log(userInfo);

    // Call signup function only if password length is valid
   await signup(userInfo);

  
    
    // Reset the form
    e.target.reset();

    navigate("/navbar/home");
  };
  
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };
  
  return (
    <div className="form-signup">
      <form ref={formRef} onSubmit={handleSubmit}>
        Name : <input type="text" name="name" placeholder="name" />
        <br/>
        Email: <input type="email" name="email" placeholder="email" />
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered,{" "}
        <a href="#login" onClick={handleClick}>
          Login
        </a>{" "}
        here.
      </div>
    </div>
  );
};

export default Signup;



























// import { useRef } from "react";

// const Signup = ({ setCurrUser, setShow }) => {
  //   const formRef = useRef();
  
  //   const signup = async (userInfo) => {
    //     const url = "http://localhost:3000/signup";
    //     try {
//       const response = await fetch(url, {
  //         method: "post",
  //         headers: {
    //           "content-type": "application/json",
    //           accept: "application/json",
    //         },
    //         body: JSON.stringify(userInfo),
    //       });
    
    //       if (!response.ok) {
      //         const data = await response.json();
//         throw new Error(data.error);
//       }

//       localStorage.setItem("token", response.headers.get("Authorization"));
//       const data = await response.json();
//       setCurrUser(data);
//     } catch (error) {
  //       console.error("Error during signup:", error.message);
  //     }
  //   };
  
  //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     const formData = new FormData(formRef.current);
    //     const data = Object.fromEntries(formData);
    
    //     // Validate password length
    //     if (data.password.length < 6) {
      //       // Display an error message or handle it as needed
      //       alert("La contraseña debe tener al menos 6 caracteres");
      //       return;
      //     }
      
      //     const userInfo = {
        //       user: { email: data.email, password: data.password },
//     };

//     // Call signup function only if password length is valid
//     await signup(userInfo);

//     // Reset the form
//     e.target.reset();
//   };

//   const handleClick = (e) => {
  //     e.preventDefault();
  //     setShow(true);
  //   };
  
  //   return (
    //     <div className="signup-style">
    //       <form ref={formRef} onSubmit={handleSubmit}>
    //         Email: <input type="email" name="email" placeholder="email" />
    //         <br />
    //         Password:{" "}
    //         <input type="password" name="password" placeholder="password" />
    //         <br />
    //         <input type="submit" value="Submit" />
    //       </form>
    //       <br />
    //       <div>
    //         Already registered,{" "}
    //         <a href="#login" onClick={handleClick}>
    //           Login
    //         </a>{" "}
    //         here.
    //       </div>
    //     </div>
    //   );
    // };
    
    // import { useRef } from "react"
    // const Signup=({setCurrUser, setShow})=>{
    //     const formRef = useRef()
    //     const signup=async (userInfo, setCurrUser)=>{
    //         const url="http://localhost:3000/signup"
    //         try{
    //             const response=await fetch(url, {
    //                 method: 'post',
    //                 headers: {
    //                     "content-type": 'application/json',
    //                     "accept": "application/json"
    //                 },
    //                 body: JSON.stringify(userInfo)
    //             })
    //             const data=await response.json()
    //             if(!response.ok) throw data.error
    //             localStorage.setItem('token', response.headers.get("Authorization"))
    //             setCurrUser(data)
    //         } catch (error){
    //             console.log("error", error)
    //         }
    //     }
    //     const handleSubmit=e=>{
    //         e.preventDefault()
    //         const formData=new FormData(formRef.current)
    //         const data=Object.fromEntries(formData)
    //         const userInfo={
    //             "user":{ email: data.email, password: data.password }
    //         }
    //         signup(userInfo, setCurrUser)
    //         e.target.reset()
    //     }
    //     const handleClick=e=>{
    //         e.preventDefault()
    //         setShow(true)
    //     }
    //     return(
    //         <div>
    //         <form ref={formRef} onSubmit={handleSubmit}>
    //             Email: <input type="email" name='email' placeholder="email" />
    //             <br/>
    //             Password: <input type="password" name='password' placeholder="password" />
    //             <br/>
    //             <input type='submit' value="Submit" />
    //         </form>
    //         <br />
    //         <div>Already registered, <a href="#login" onClick={handleClick} >Login</a> here.</div>
    //     </div>
    //     )
    // }
    // export default Signup
    
    // import { useRef } from "react";
    
    // const Signup = ({ setCurrUser, setShow }) => {
    //     const formRef = useRef();
    
    //     const signup = async (userInfo, setCurrUser) => {
    //         const url = "http://localhost:3000/signup";
    //         try {
    //             const response = await fetch(url, {
    //                 method: "post",
    //                 headers: {
    //                     "content-type": "application/json",
    //                     accept: "application/json",
    //                 },
    //                 body: JSON.stringify(userInfo),
    //             });
    //             const data = await response.json();
    //             if (!response.ok) throw data.error;
    //             localStorage.setItem("token", response.headers.get("Authorization"));
    //             setCurrUser(data);
    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     };
    
    //     const handleSubmit = (e) => {
    //         e.preventDefault();
    
    //         const formData = new FormData(formRef.current);
    //         const data = Object.fromEntries(formData);
    
    //         // Validate password length
    //         if (data.password.length < 6) {
    //             // Display an error message or handle it as needed
    //             alert("La contraseña debe tener al menos 6 caracteres");
    //             return;
    //         }
    
    //         const userInfo = {
    //             user: { email: data.email, password: data.password },
    //         };
    
    //         // Call signup function only if password length is valid
    //         signup(userInfo, setCurrUser);
    
    //         // Reset the form
    //         e.target.reset();
    //     };
    
    //     const handleClick = (e) => {
    //         e.preventDefault();
    //         setShow(true);
    //     };
    
    //     return (
    //         <div>
    //             <form ref={formRef} onSubmit={handleSubmit}>
    //                 Email: <input type="email" name="email" placeholder="email" />
    //                 <br />
    //                 Password:{" "}
    //                 <input type="password" name="password" placeholder="password" />
    //                 <br />
    //                 <input type="submit" value="Submit" />
    //             </form>
    //             <br />
    //             <div>
    //                 Already registered,{" "}
    //                 <a href="#login" onClick={handleClick}>
    //                     Login
    //                 </a>{" "}
    //                 here.
    //             </div>
    //         </div>
    //     );
    // };
    
    // export default Signup;