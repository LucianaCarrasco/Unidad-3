const cantante = {
    nombre: "Kenia Os",
    género: "Femenino",
    edad: 25,
    nacionalidad: "Mexicana",
    colaboraciones: [
        {nombre: "Steve Aoki",
        canción: "Replay"
        },
        {
            nombre: "Bella Poarch",
            canción: "Bad Boy!"
        }
    ]
}

console.log(cantante);

//Mostrar 4 datos
console.log(cantante.nombre);
console.log(cantante.edad);
console.log(cantante.género);
console.log(cantante.nacionalidad);

//Modificar dos datos anidados
cantante.colaboraciones[0].canción = "Fiesta";
cantante.colaboraciones[1]["nombre"] = "Kali Uchis";
console.log(cantante);
