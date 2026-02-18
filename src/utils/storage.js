// Clé unique pour LocalStorage
export const CLIENTS_STORAGE_KEY = "mini_crm_clients"

// Charger les clients
export function loadClients() {
  try {
    const stored = localStorage.getItem(CLIENTS_STORAGE_KEY)

    if (!stored) return null

    const parsed = JSON.parse(stored)

    if (Array.isArray(parsed)) {
      return parsed
    }

    return null
  } catch (error) {
    console.error("Erreur lors du chargement :", error)
    return null
  }
}

// Sauvegarder les clients
export function saveClients(clients) {
  try {
    const json = JSON.stringify(clients)
    localStorage.setItem(CLIENTS_STORAGE_KEY, json)
  } catch (error) {
    console.error("Erreur lors de la sauvegarde :", error)
  }
}
