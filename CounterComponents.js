import {useState} from "react";
export default function CounterComponent(){
    var [counter, setCounter] = useState(0);
    function incrementCounter(){
        setCounter(counter+1)
        setCounter(counter+1)
    }
    return (
    <>
    <h1>
        counter value is {counter}
        </h1>
        <input type="button" value="increment"
        onclick={incrementCounter}/>
        </>
    )
}
