import { create } from 'zustand'

// Store
export const getStoreCountries = create((set) => ({
    countries: [],
    error: null,  // État pour stocker les erreurs
    fetchCountries: async () => {
        try {
            const response = await fetch('http://localhost:3000/api/countries/all');
            if (!response.ok) {
                throw new Error(`Erreur ${response.status}: ${response.statusText}`);
            }
            const data = await response.json();
            set({ countries: data, error: null });  // Réinitialise l'erreur en cas de succès
        } catch (err) {
            console.error("Erreur lors de la récupération des pays :", err);
            set({ error: err.message });  // Met à jour l'état d'erreur
        }
    }
}));