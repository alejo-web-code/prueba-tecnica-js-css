export default (json) => {
  try {
    const totalUsuarios = json.length;

    if (!Array.isArray(json) || json.length === 0) {
      throw new Error("Error en los datos recibidos");
    }

    const sumaEdad = json.reduce((total, usuario) => {
      if (typeof usuario.edad !== 'number') {
        throw new Error("El valor de la edad no es válida");
      }
      return total + usuario.edad;
    }, 0);

    return sumaEdad / totalUsuarios;
    
  } catch (error) {
      console.error("Error al procesar los datos:", error.message);
      return 0;
  }
};
  