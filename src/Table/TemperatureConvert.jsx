
import  { useState } from "react";

export function TemperatureConvert() {
  const [celsius, setCelsius] = useState(""); 

  
  const fahrenheit = celsius ? (celsius * 9) / 5 + 32 : "";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Celsius to Fahrenheit Converter</h2>
      <input
        type="text"
        value={celsius}
        placeholder="Enter Celsius"
        onChange={(e) => setCelsius(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      {fahrenheit !== "" && (
        <p style={{ fontSize: "18px", marginTop: "20px" }}>
          {celsius}°C = {fahrenheit.toFixed(2)}°F
        </p>
      )}
    </div>
  );
}
