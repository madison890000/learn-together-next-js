import {useEffect, useState} from "react";


export default function useEffectDemo() {


    useEffect(() => {
        /**
         *  this will render every time when Component reRenders
         */
        console.log('render every time')
    })

    useEffect(() => {
        /**
         * this will render once (no strict mode), could consider it as componentDidMount
         */
        console.log('render once')
    }, [])

    const [tips, setTips] = useState('initial tips');
    const [age, setAge] = useState(0);

    useEffect(() => {
        /**
         * this will run only when age changed
         */
        console.log('render when dependencies changed');
        setTips(`now age is ${age}`)
    }, [age])
    return (
        <>
            <h3>React useEffect Demo</h3>
            <button onClick={() => {
                setAge(age => age + 1)
            }}>
                change age + 1
            </button>
            <div>{tips}</div>
        </>
    )
}