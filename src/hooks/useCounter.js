/* import React, { useState } from 'react'

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue)
  return {
    counter,
  }
} */

import React from 'react'
import { useState } from 'react';



export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue) 
    const handleAdd = (value = 1) => {
        setCounter(counter + value)
    }

    const handleSubstract = (value = 1) => {
        setCounter(counter -value)
    }

    const handleReset = () => {
        setCounter(initialValue)
    }


    return {
      handleAdd,
      handleSubstract,
      handleReset,
      counter
    }
}



