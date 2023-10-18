"use client"
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
    <div className="min-h-screen m-2 p-2">
      <h3 className="p-2 h3">React useEffect Demo</h3>
      <button onClick={() => {
        setAge(age => age + 1)
      }} className="p-2 border-2 border-violet-500 rounded-md">
        change age + 1
      </button>
      <div className="p-2">{tips}</div>
    </div>
  )
}