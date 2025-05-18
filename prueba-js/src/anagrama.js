export default (word1, word2) => {
  return parse(word1) === parse(word2);
};

/**
 * Normaliza y procesa una cadena de texto para obtener una versión
 * ordenada y sin acentos ni caracteres no alfabéticos.
 *
 * Pasos que realiza:
 * - Convierte todo a minúsculas.
 * - Normaliza caracteres Unicode para eliminar acentos.
 * - Elimina caracteres que no sean letras a-z.
 * - Convierte la cadena en un arreglo de caracteres.
 * - Ordena alfabéticamente los caracteres.
 * - Une el arreglo de nuevo en una cadena.
 *
 * @param {string} string - Texto a procesar.
 * @returns {string} Cadena procesada, ordenada y limpia de acentos y caracteres especiales.
 */
const parse = (string) => {
  return string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");
}
  