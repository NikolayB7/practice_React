import {Component,useState} from 'react'
import './app-counter.css';

const AppCounter =(props)=>{

    const [counter,setCounter] = useState(props.counter)

    function counterUp(){
        setCounter(counter=>(counter<50) ? ++counter : 50)
    }
    function counterDown(){
        setCounter(counter=>(counter<=-50) ? -50 : --counter)
    }

    function counterRandom(){
        let  min = -50
        let  max = 50
        setCounter(Math.floor(Math.random() * (max - min + 1)) + min)
    }

    function counterReset(){
        setCounter(props.counter)
    }

    return(
        <div className="app">
            <div className="counter">{counter}</div>
            <div className="controls">
                <button onClick={counterUp}>INC</button>
                <button onClick={counterDown}>DEC</button>
                <button onClick={counterRandom}>RND</button>
                <button onClick={counterReset}>RESET</button>
            </div>
        </div>
    )
}

export default AppCounter