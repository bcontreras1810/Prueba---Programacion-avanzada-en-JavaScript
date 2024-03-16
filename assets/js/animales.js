// Este código define un módulo para obtener datos de animales desde un archivo JSON.
let dataAnimales = (() => {
    // La URL del archivo JSON.
    const url = "../../animales.json";

    // Función asincrónica para obtener los datos de la URL.
    const getData = async () => {
        // Realiza una solicitud de red.
        const res = await fetch(url);
        // Verifica si la respuesta es exitosa.
        const { animales } = await res.json();
        // Retorna la lista de animales.
        return animales;
    }
    // Retorna un objeto con la función getData.
    return { getData };
})();
// Exporta el módulo.
export default dataAnimales; 