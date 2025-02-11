export async function fetchAsync(url) {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json
    } catch (error) {
        console.error("Failed to fetch stars:", error);
    }
}
