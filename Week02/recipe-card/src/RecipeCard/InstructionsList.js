import React from 'react'

export default function InstructionsList(props){
    const {instructions} = props
    return(
        <div>
        <h2>Insturctions</h2>
        <ol>
            {instructions.map((i, index) => (
                <li key={index}>{i}</li>
            ))}
        </ol>
    </div>
    )
}