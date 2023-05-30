// @ts-nocheck
import { useState, useEffect } from "react"
import AsyncComponent from "./AsyncComponent"

export default function App(){
  const [data,setData] = useState([])
  useEffect(()=> {
       fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setData(data.slice(0,10)))},[])
  return(
    <div>
      <ol>
        <p>The following data is been fetched</p>
            {data.map((book) => {
            return <li>{book.id+"\t"+book.title}</li>
            })}
      </ol>
      <AsyncComponent />
    </div>
  )
}

//