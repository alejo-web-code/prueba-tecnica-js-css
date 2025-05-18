export default (json) => {
  return json.map(usuario => {
    try {
      if (!usuario.nombre || !usuario.apellido) {
        throw new Error("Usuario incompleto");
      }
      
      const arrayNombre = [
        usuario.nombre,
        usuario.apellido,
        usuario.apellido2
      ]

      const usuarioNombreCompleto = arrayNombre.filter(Boolean).join(" ");
      
      return capitalizar(usuarioNombreCompleto);
      
    } catch (error) {
      console.error("Error al procesar los datos:", error.message);
      return "Nombre desconocido";
    }
  });
};

/**
 * Capitaliza cada palabra en una cadena de texto.
 *
 * @param {string} data - Texto a capitalizar.
 * @returns {string} Texto capitalizado; si no hay data, retorna cadena vacía.
 */
function capitalizar (data) {
  return data
    ? data
      .toLowerCase()
      .split(" ")
      .map(el => el.charAt(0).toUpperCase() + el.slice(1))
      .join(" ")
    : "";
}
  