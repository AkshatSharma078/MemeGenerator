import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="https://picsum.photos/640/360" alt="meme"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}