import React, { useState, useEffect } from "react";
import "./Converter.css";

const Converter = () => {
	const [currencies, setCurrencies] = useState([]);
	const [fromCurrency, setFromCurrency] = useState("USD");
	const [toCurrency, setToCurrency] = useState("EUR");
	const [fromAmount, setFromAmount] = useState(1);
	const [toAmount, setToAmount] = useState("");

	const BASE_URL = "https://api.frankfurter.app/";
	const CONVERT_API = `${BASE_URL}latest?amount=${fromAmount}&from=${fromCurrency}&to=${toCurrency}`;
	const CURRENCIES_API = `${BASE_URL}currencies`;

	const fetchData = async api => {
		const currencyResponse = await fetch(api);
		return await currencyResponse.json();
	};

	useEffect(() => {
		fetchData(CURRENCIES_API).then(data => {
			setCurrencies(Object.entries(data));
		});
	}, []);

	useEffect(() => {
		if (fromCurrency === toCurrency) {
			if (fromAmount < 0 || fromAmount === "") {
				setToAmount("");
			} else {
				setToAmount(fromAmount);
			}
		} else if (fromAmount < 0 || fromAmount === "") {
			setToAmount("");
		} else if (fromAmount === 0) {
			setToAmount(0);
		} else {
			fetchData(CONVERT_API).then(data => setToAmount(data.rates[toCurrency]));			
		}
	}, [fromCurrency, toCurrency, fromAmount]);

	const handleFromCurrencyChange = e => {
		setFromCurrency(e.target.value);
	};

	const handleToCurrencyChange = e => {
		setToCurrency(e.target.value);
	};

	const handleFromAmountChange = e => {
		setFromAmount(e.target.value);
	};

	return (
		<div className="Converter">
			<div>
				<label htmlFor="from">From</label><br />
				<select name="from" id="from" value={fromCurrency} onChange={handleFromCurrencyChange}>
					{currencies.map(currency => <option value={currency[0]} key={currency[0]}>{currency[1]}</option>)}
				</select><br />

				<input type="number" defaultValue={fromAmount} onChange={handleFromAmountChange}/>
			</div>

			<div>
				<label htmlFor="to">To</label><br />
				<select name="to" id="to" value={toCurrency} onChange={handleToCurrencyChange}>
					{currencies.map(currency => <option value={currency[0]} key={currency[0]}>{currency[1]}</option>)}
				</select>

				<p className="to-amount">{toAmount !== "" ? Math.round(toAmount * 100) / 100 : ""}</p>
			</div>
		</div>
	);
};

export default Converter;