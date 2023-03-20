import React, { useEffect, useState } from 'react'
import { Message } from './Message'


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'perro2',
        email: 'carlospianiforte@gmail.com',
    })
    const {username, email} =formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name] : value
        })
    }

    useEffect(()=>{
        //console.log('useEffect called');
    }, [])

    useEffect(()=>{
        //console.log('useEffect changed');
    }, [formState])

    useEffect(()=>{
        //console.log('email change');
    }, [email])

  

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input 
            type="text"
            className='form-control'
            placeholder='UserName'
            name='username'
            value={username}
            onChange= {onInputChange}
        />
        <input 
            type="email"
            className='form-control mt-2'
            placeholder='carlospianiforte@gmail.com'
            name='email'
            value={email}
            onChange= {onInputChange}

        />
        {
            (username==='perro2')&&<Message/>
        }
    </>
  )
}

