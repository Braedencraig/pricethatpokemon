import React, { useState } from 'react'

export default function InputDecimal() {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        const start = e.target.selectionStart;
        let val = e.target.value;
        val = val.replace(/([^0-9.]+)/, "");
        val = val.replace(/^(0|\.)/, "");
        const match = /(\d{0,3})[^.]*((?:\.\d{0,2})?)/g.exec(val);
        const value = match[1] + match[2];
        e.target.value = value;
        setInput(value);
        if (val.length > 0) {
            e.target.value = Number(value).toFixed(2);
            e.target.setSelectionRange(start, start);
            setInput(Number(value).toFixed(2));
        }
    }

    return (
        <div>
           <input
                type="text"
                className="pokemon-input"
                onChange={handleChange}
                value={input}
                style={{ fontSize: "22px", padding: "4px" }}
                placeholder={`Guess the price`}
            />
        </div>
    )
}
