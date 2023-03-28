import React from 'react'
import { useCounter } from '../hooks/useCounter'
import { useFetch } from '../hooks/useFetch'
import { LoadingQuote } from './components/LoadingQuote'
import { Quote } from './components/Quote'

export const MultipleCustomHooks = () => {
    const {handleAdd, handleSubstract,counter} = useCounter(1)
    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const {author, quote} = !!data && data[0]
    //console.log(author, quote);
    console.log(counter);


  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {
            isLoading ? (<LoadingQuote/>) : (<Quote author={author} quote={quote} counter={counter}/>)
        }

        <button 
            onClick={()=> handleSubstract()} 
            className='btn btn-primary' 
            disabled={isLoading} >
            After quote
        </button>

        <button 
            onClick={()=> handleAdd()} 
            className='btn btn-primary'
            disabled={isLoading} >
            Next quote
        </button>

    </>
  )
}
