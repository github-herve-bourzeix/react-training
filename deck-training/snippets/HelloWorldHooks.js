import React, { useEffect, useState } from 'react'


export default () => {
    const now = () => new Date().toLocaleTimeString()
    const [currentTime, setTime] = useState(now())
    useEffect(() => {
        const handle = setInterval(() => {
            setTime(now())
        }, 700)
        return () => clearInterval(handle)
    }, [])

    return (
        <>
            <h1>Hello, world!</h1>
            <pre>It is {currentTime}</pre>
        </>
    )
}

