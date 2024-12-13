import React from 'react'

import { useLoaderData } from 'react-router'

function Github() {
    const data=useLoaderData()
    // const[data,setdata]=useState([])
    // useEffect(() => {
    //      fetch('https://api.github.com/users/hiteshchoudhary')
    //      .then(response => response.json())
    //      .then(data => {
    //         console.log(data);
    //         setdata(data)
    //      })
    //     }, [])

  return (
    <div className='text-center p-4 bg-slate-600 text-white'> Github:{data.followers}</div>
  )
}

export default Github
export const githubinfoloader=async()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}