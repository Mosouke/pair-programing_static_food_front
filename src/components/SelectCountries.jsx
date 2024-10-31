import React, { useEffect, useState } from "react";
import { getStoreCountries } from "../Store/StoreCountries";

export default function SelectCountries({ getCountryOption }) {
    const [country, setCountry] = useState('');
    const { countries, fetchCountries } = getStoreCountries();

    useEffect(() => {
        fetchCountries();
    }, []);

    // Appelle getCountryOption seulement lorsqu'une nouvelle sélection est faite
    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        const selectedCountryName = e.target.options[e.target.selectedIndex].text;
        console.log("selectedCountry", selectedCountryName);
        setCountry(selectedCountry);
        getCountryOption(selectedCountry, selectedCountryName); // Appelle la fonction du parent avec le pays sélectionné
    };

    return (
        <select
            onChange={handleCountryChange}
            id="ville"
            name="ville"
            className="w-full px-4 py-2 bg-gray-800 border border-blue-500 rounded-xl text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
            value={country}
            required
        >
            <option value="">Choisissez un pays</option>
            {countries.map((country) => (
                <option key={country.id} value={country.id}>{country.Country}</option>
            ))}
        </select>
    );
}