import React from 'react'

const Crud = () => {
    const onSubmit=()=>{};
    const onChange=(e)=>{
     const {name, value}=e.target;
     console.log(name.value);
     const userData ={
        firstName:name,
        lastName:value,
     }
    }
     
  return (
    <div>
        <form style={{display:"flex", flexDirection:"column"}}>
            <label>firstName</label>
            <input type= "text" name="firstName" id="firstName" onChange={onChange}></input>
            <label>lastName</label>
            <input  type= "text" name="firstName" id="firstName" onChange={onChange}></input>
            <label>Email</label>
            <input  type= "Email" name="Email" id="Email" onChange={onChange}></input>
            <label>Gender</label>
            <label>Male</label>
            <input  type= "radio" name="gender" id="male" onChange={onChange}></input>
            <label>Female</label>
            <input  type= "radio" name="gender" id="Email" onChange={onChange}></input>
        </form>
        <button onClick={onSubmit}>submit</button>
    </div>
  )
}

export default Crud