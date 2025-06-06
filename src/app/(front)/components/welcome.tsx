'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"

//to make it become attribute like html
type WelcomeProps = {
    headTitle: string
    isShow: boolean
}

export default function Welcome({ headTitle, isShow }: WelcomeProps) {
    // const text = "welcome to cosci"
    const [text, setText] = useState("CoSci lover")
    // const currentYear = <p>2025</p>
    const year = 2025
    const handleClick = () => {
        setText("Nihao fine shyt")
        alert("Hello sir")
    }
    return (
        <div>
            <h1>{headTitle}</h1>
            <p >{text.toLocaleUpperCase()} {year}</p>
            {isShow && <p>Date:10/10/1998</p>}
            {/* <button className="bg-blue-700 text-amber-300 p-3 m-3  rounded-lg " onClick={handleClick}>Click Me</button> */}
            <Button variant="destructive" onClick={handleClick} className="p-3 m-3">Click Me</Button>
            {/* {isShow ? <p>Hello Next.js</p> : <p>Hello Javascript</p>} */}
            <p>{process.env.NEXT_PUBLIC_APP_NAME}</p>
        </div>
    );
}