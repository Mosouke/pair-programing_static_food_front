import { useEffect, useState } from "react";

export default function CardStat({ meal, countryName, countryId }) {
    const [plat, setPlat] = useState("");
    const [complete, setComplete] = useState("");
    const [incomplete, setIncomplete] = useState("");
    const [country, setCountry] = useState("");

    const getStatsPlat = async () => {
        try{
            if(meal === "Petit-déjeuner") {
                const response = await fetch(`http://localhost:3000/api/stats/petitDejeune`, 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ countryId }),
                });
                const data = await response.json();
                setComplete(data.complete); 
                setIncomplete(data.incomplete);
            }
            if(meal === "Déjeuner") {
                const response = await fetch(`http://localhost:3000/api/stats/dejeune`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ countryId }),
                });
                const data = await response.json();
                setComplete(data.complete);
                setIncomplete(data.incomplete);
            }
            if(meal === "Dîner") {
                const response = await fetch(`http://localhost:3000/api/stats/diners`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ countryId }),
                });
                const data = await response.json();
                console.log(data);
                setComplete(data.complete);
                setIncomplete(data.incomplete);
            }
        }catch(err) {
            console.error(err);
        };
    } 

    useEffect(() => {
        getStatsPlat();
    }, [countryId, meal]); // Mettez à jour à chaque changement de countryId


    useEffect(() => {
        if (meal) {
            setPlat(meal);
        }
        if (countryName) {
            setCountry(countryName);
        }
    }, [meal, countryName]); // Mettez à jour à chaque changement de meal ou countryName

    return (
        <div className="w-full max-w-sm mx-auto overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-0.5 shadow-lg transition-all duration-300 hover:shadow-2xl">
            <div className="px-6 py-4 bg-gray-900 backdrop-blur-sm">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">{plat || "No meal selected"}</h1>
                <p className="text-sm text-blue-300">Stats {meal} en {country || "Unknown country"}</p>
            </div>
            <div className="flex items-center justify-between px-6 py-4 bg-gray-800 transition-colors duration-300">
                <span className="text-sm font-bold text-blue-300">Complet</span>
                <span className="text-sm font-bold text-green-400">{complete}%</span>
            </div>
            <div className="flex items-center justify-between px-6 py-4 bg-gray-900 transition-colors duration-300">
                <span className="text-sm font-bold text-blue-300">Incomplet</span>
                <span className="text-sm font-bold text-red-400">{incomplete}%</span>
            </div>
        </div>
    );
}