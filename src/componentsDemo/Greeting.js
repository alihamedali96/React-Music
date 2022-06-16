import React, {useState} from 'react';

const Greeting = () => {
    const[username,setUsername] = useState('friend')
      const[nameInput,setNameInput] = useState('')

      const handleInput = (e) =>{
        setNameInput(e.target.value)

      }

      const handleFormSubmit = (e) =>{
        e.preventDefault()
        setUsername(nameInput)
        
    }

    return(
        <>
        <h3 aria-label="greeting">Hi there, {username}</h3>

        <form onSubmit = {handleFormSubmit}>
            <label htmlFor="username">Username</label>
            <input type ="text" 
            id="username" 
            value= {nameInput}
            onChange={handleInput}/>
            <input type ="submit" 
            value="Update!"
           />

        </form>
        </>
    )

}

export default Greeting;
