import { useEffect, useState } from "react";

export default function AsyncComponent(){

    const [data,setData] = useState([])

    useEffect(() => async ()=> {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        setData(data.splice(0,10))
    },[])

    return(
        <div>
            <p> This been fetched using async function</p>
            <ul>
                {data.map((book) => <li>{book.id + book.title}</li>)}
            </ul>
        </div>
    )

}