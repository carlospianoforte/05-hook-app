import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'

export const Quote = ({author, quote, counter}) => {

  const [boxSize, setBoxSize] = useState({width:0, height:0})

  const pRef = useRef()

  useLayoutEffect(() => {
    const {width, height} = (pRef.current.getBoundingClientRect());
    setBoxSize({width, height})
  }, [quote])


  return (
    <>
    <blockquote 
      className='blockquote text-end'
      style={{display:'flex'}}
      >
    <p ref={pRef} className='mb-1' >{counter} {quote}</p>
    <footer className='blockquote-footer' >{author}</footer>
    </blockquote>

    <code>{JSON.stringify(boxSize)}</code>
    
    </>
  )
}
