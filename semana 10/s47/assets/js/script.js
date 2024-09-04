//Objetos literales
//Declaramos nuestro objeto
const persona = {
    nombre: "Carla",
    apellido: "Suarez",
    edad: "27",
    dni_cedula: "375828499", // snake_case
};

//Mostramos el objeto
console.log(persona);

// ACCEDER O MODFICAR UN OBJETO
// objeto.clave = valor; Notación de punto
// objeto["clase"] = valor; Notación de corchetes

// Accedemos a un propiedad
// console.log(personal[0]); // Esto da undefined
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.dni_cedula);
console.log(persona["dni_cedula"]);

// Agregar propiedades
persona.correo = "micorreo@correo.com";
// Mostramos el objeto
console.log(persona);

//Modificar propiedades
persona.correo = "carlasuarez78@correo.com";
//Mostramos el objeto
console.log(persona);