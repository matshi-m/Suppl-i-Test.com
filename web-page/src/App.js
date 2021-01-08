import React from "react";
import {useForm} from "react-hook-form";
import logo from './logo.svg';
import './App.css';

function App() {
  const {register, handleSubmit,errors}=useForm();

  const onSubmit=(values)=>console.log(values);
  return(
     <div className="App">
       <form onSubmit={handleSubmit(onSubmit)}>
        
         <label>
           
            Name
           <input type="text" name="name" ref={register({required:true,maxLength:30,
            pattern:{
              value:/^[A-Z]+$/i,
              message: "Alphabets Only",
            },
           })} />
           
         </label>
         <br></br>
         <label>
           
           Surname
           <input type="text" name="surname" ref={register({required:true,maxLength:30,
            pattern:{
              value:/^[A-Z]+$/i,
              message: "Alphabets Only",
            },
           })} />
           
         </label>
         <br></br>
         <label>
           
           Email
           <input type="email" name="email" ref={register({
             required:"Email is required",
             pattern:{
               value:{value:/^[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}$/i, message:"Invalid email"},
               message: "Invalid email address.",

             },
          })} />
           
         </label>
         {errors.email && <span>{errors.email.message}</span>}
         <br></br>
         <label>
           
           Phone
           <input type="number" name="phone" ref={register({required:true,minLength:9,maxLength:11})}/>
           // why didn't you use the regex here aswell? pattern [0-9]{9,11} would have been sufficient
         </label>
         <br></br>
         <button type="submit">Submit</button>
         <br></br>
       </form>
     </div>
  );
}
export default App;
