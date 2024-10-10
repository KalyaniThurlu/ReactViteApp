
import { useState } from "react";

import "./bmi.css"

export function Bmicalculator() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState("");

    const handleCalculate = () => {
        if (weight && height) {
            const bmi = weight / (height * height);
            let category = '';

            
            
            if (bmi < 10.5) {
                category = 'Underweight';
            } else if ( bmi < 12.9) {
                category = 'Normal weight';
            } else if ( bmi < 29.9) {
                category = 'Overweight';
            } else {
                category = 'Obesity';
            }

            setResult(`Your BMI: ${bmi.toFixed(2)}, Category: ${category}`);
        } else {
            setResult('Please enter valid weight and height.');
        }
    };

    return (
        <div className="app">
            <h1>BMI Calculator</h1>
            <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <input
                type="number"
                placeholder="Height (m)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
            <button onClick={handleCalculate}>Calculate BMI</button>
            {result && <h2>{result}</h2>}
        </div>
    );
};



