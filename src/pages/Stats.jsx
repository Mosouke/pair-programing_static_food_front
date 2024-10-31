import { ArrowBigLeft } from "lucide-react"
import { Link } from "react-router-dom"
import React, { useState } from "react"
import SelectCountries from "../components/SelectCountries"
import CardStat from "../components/CardStat";

export default function Stats () {
  const [countryId, setCountryId] = useState('');
  const [countryName, setCountryName] = useState('');
  const [meal, setMeal] = useState('');

  const getCountryOption = (countryId, country) => {
    setCountryId(countryId);
    setCountryName(country)
}
    return (
      <>
        <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MTcxNyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMzNDk1ZTYiIG9wYWNpdHk9IjAuMyI+PC9jaXJjbGU+Cjwvc3ZnPg==')] opacity-10"></div>
          <div className="relative z-10">
            <div className="flex justify-around items-center p-6 border-b border-blue-500/30">
              <Link to={"/"} className="text-2xl text-blue-300 flex items-center justify-between group transition duration-300 hover:text-blue-400">
                <ArrowBigLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" /> Formulaires
              </Link>
              <h1 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">Static Food</h1>
            </div>
            <div className="flex items-center justify-center p-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                {['Petit-déjeuner', 'Déjeuner', 'Dîner'].map((meal) => (
                  <div
                    key={meal}
                    onClick={() => setMeal(meal)}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 transition-all duration-500 hover:from-blue-400 hover:to-purple-400 hover:scale-105 cursor-pointer"
                  >
                    <div className="relative flex items-center justify-center h-20 bg-gray-900 backdrop-blur-sm rounded-xl transition-all duration-500 group-hover:bg-opacity-70">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-xl font-bold uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                        {meal}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <h2 className="text-blue-300 text-3xl text-center m-4">{meal}</h2>
            <div className="flex justify-center max-w-2xl m-auto">
              {meal && <SelectCountries getCountryOption={getCountryOption} />}
            </div>
            <div className="m-7">
            </div>
            {countryId && <CardStat meal={meal} countryName={countryName} countryId={countryId} />}
          </div>
        </main>
      </>
    )
}