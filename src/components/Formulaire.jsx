import React, { useState } from "react";
import SelectCountries from "./SelectCountries";

export default function Formulaire({ meal }) {
  const [drink, setDrink] = useState('');
  const [entree, setEntree] = useState('');
  const [plat, setPlat] = useState('');
  const [dessert, setDessert] = useState('');
  const [countryId, setCountryId] = useState('');

  const getCountryOption = (country) => {
    setCountryId(country);
  }

  const handlesubmitPetitDejeune = async (e) => {
    e.preventDefault();
    const data = {
      Drink: drink,
      Plat: plat,
      countryId
    };
    try {
      const response = await fetch('http://localhost:3000/api/petitDejeune/create', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        console.log('Petit-déjeuner submitted successfully');
        // Reset form fields
        setDrink('');
        setPlat('');
      }
    } catch (error) {
      console.error('Error submitting petit-déjeuner:', error);
    }
  };

  const handlesubmitDejeune = async (e) => {
    e.preventDefault();
    const data = {
      Drink: drink,
      Entree: entree,
      Plat: plat,
      Dessert: dessert,
      countryId
    };
    try {
      const response = await fetch('http://localhost:3000/api/Dejeune/create', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        console.log('Déjeuner submitted successfully');
        // Reset form fields
        setDrink('');
        setEntree('');
        setPlat('');
        setDessert('');
      }
    } catch (error) {
      console.error('Error submitting déjeuner:', error);
    }
  };

  const handlesubmitDiner = async (e) => {
    e.preventDefault();
    const data = {
      Drink: drink,
      Entree: entree,
      Plat: plat,
      Dessert: dessert,
      countryId
    };
    try {
      const response = await fetch('http://localhost:3000/api/Diners/create', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        console.log('Dîner submitted successfully');
        // Reset form fields
        setDrink('');
        setEntree('');
        setPlat('');
        setDessert('');
      }
    } catch (error) {
      console.error('Error submitting dîner:', error);
    }
  };

  const inputClass = "w-full px-4 py-2 bg-gray-800 border border-blue-500 rounded-xl text-blue-300 placeholder-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out";
  const labelClass = "block text-sm font-medium text-blue-400 mb-1";
  const buttonClass = "w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95";

  const renderInput = (id, label, value, setValue, placeholder) => (
    <div>
      <label htmlFor={id} className={labelClass}>{label} :</label>
      <input 
        type="text" 
        id={id} 
        name={id} 
        placeholder={placeholder}
        className={inputClass}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );

  return (
    <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md m-auto border border-blue-500/30 backdrop-blur-sm">
      <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Formulaire de Menu</h1>
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-300">{meal}</h2>
      <form onSubmit={
        meal === 'Petit-déjeuner' ? handlesubmitPetitDejeune :
        meal === 'Déjeuner' ? handlesubmitDejeune :
        handlesubmitDiner
      } className="space-y-6">
        <div>
          <label htmlFor="ville" className={labelClass}>Ville :</label>
          <SelectCountries getCountryOption={getCountryOption} />
        </div>
        {renderInput("drink", "Boisson", drink, setDrink, "Entrez votre boisson")}
        {meal !== 'Petit-déjeuner' && renderInput("entree", "Entrée", entree, setEntree, "Entrez votre entrée")}
        {renderInput("plat", "Plat", plat, setPlat, "Entrez votre plat")}
        {meal !== 'Petit-déjeuner' && renderInput("dessert", "Dessert", dessert, setDessert, "Entrez votre dessert")}
        <button type="submit" className={buttonClass}>
          Soumetre
        </button>
      </form>
    </div>
  );
}