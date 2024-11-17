import React,{usestate} from' react'
  

export default function Feedback() {
    const [data,setData] = usestate({
        username : '',
        useremail :'',
        mesaage : '',
    })
    const handleChange = (change)=>{
        let {name,value}= change.target;
        
        setData({...data ,[name] :value})


    }
    const handleSubmit = (change)=>{
        change.preventDefault();
        alert("thankyou...")
        console.log("formdata :->",data)
    }
    return(
    
    <div className='form'>
        <label htmlFor="username">UserName :</label>
        <input
        type ='text'
        name="username"
        value = {data.username}
        onChange={handleChange}
        placeholder='username'
        required
          /> <br/>
       <label htmlFor="useremail">Useremail :</label>
       <input
        type ='text'
        name="useremail"
        value = {data.useremail}
        onChange={handleChange}
        placeholder='username'
        required
          /> <br/>
        <label htmlFor="message">Feedback</label>
        <textarea
        name="message"
        value = {data.message}
         onChange={handleChange}
        placeholder='message'/><br/>
        <button onclick={handleSubmit}>submit</button>
       
     </div>
    )
}

