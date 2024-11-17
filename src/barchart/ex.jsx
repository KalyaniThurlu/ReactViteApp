import  { useState, useEffect } from "react";
import axios from "axios";

export function  CurrencyConverter1  ()  {
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrencies, setTargetCurrencies] = useState(["EUR", "INR", "JPY","USA"]);
  const [conversionRates, setConversionRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${baseCurrency}`
        );
        setConversionRates(response.data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBaseCurrencyChange = (e) => {
    setBaseCurrency(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Currency Converter</h2>
      <div>
        <label>Amount: </label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <div>
        <label>Base Currency: </label>
        <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="INR">INR</option>
          <option value="JPY">JPY</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <h3>Converted Amounts:</h3>
      <ul>
        {targetCurrencies.map((currency) => (
          <li key={currency}>
            {currency}: {conversionRates[currency] ? (amount * conversionRates[currency]).toFixed(3) : "Loading..."}
          </li>
        ))}
      </ul>
    </div>
  );
};



