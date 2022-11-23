// http://35.76.53.28:8080/mall

import { createContext } from 'react'

// const data = fetch(`http://35.76.53.28:8080/mall`)
// .then(res => )



async function callAPI  () {
    const res = await fetch(`http://35.76.53.28:8080/mall`)
    const result = await res.json()
    return result 
    
};

export const callAPIData = createContext(callAPI())
