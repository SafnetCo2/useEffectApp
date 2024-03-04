import React, { useState } from "react"
const FavoriteColors = () => {
    const [color, setColors] = useState('yellow')
    return (
        <>
            <h1>My favorite color is! {color}</h1>
            <div className="bg-color"style={{background: color}}></div>
            <div className="bg-text">
                <button className="blue"  type="button" onClick={() => setColors ("Blue")}>Blue</button>
            
                <button type="button" onClick={()=> setColors ("Red")}>Red</button>
                <button type="button"   onClick={()=> setColors ("pink")}>Pink</button>
                <button type="button"   onClick={()=> setColors("green")}>Green</button>
                <button type="button" onClick={() => setColors  ("black")} >Black</button>
                <button type="button" onClick={() => setColors('yellow')}>Yellow</button>
            </div>

        </>
    );
} 
export default FavoriteColors