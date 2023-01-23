import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    
const [count, setCount] = useState(0)

    return (
        <div className='counter'>
            <h2>Counter</h2>

            <p>You clicked {count} times</p>

            <button onClick={() => {
                if (count > 0) {
                    setCount(count - 1)
                }
            }}>-</button>
            <button onClick={()=>setCount(count+1)}>+</button>

        </div>
    )
}

export default Counter