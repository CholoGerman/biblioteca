window.onload = () => {
    obtenerLibros();
}
async function obtenerLibros() {
    let url = "../../../BACKEND/controlador/libro.php?funcion=obtener";
    let respuesta = await fetch(url);
    let datos = await respuesta.json()
    console.log(datos);
    Listar(datos)
}





function cargarDatos(id,nombre, fecha, precio) {

    document.querySelector("#id").value = id;
    document.querySelector("#nombre").value = nombre;
    document.querySelector("#fecha").value = fecha;
    document.querySelector("#precio").value = precio;
}




function Listar(libros) {

    let tbodyElement = document.querySelector("#cuerpoTablaLibros");
    libros.forEach((libro) => {
        tbodyElement.innerHTML += `

<tr>
    <td>${libro.nombre} </td>
    <td>${libro.fecha}</td>
    <td>${libro.precio} </td>
    <td><button onclick="cargarDatos('${libro.id}','${libro.nombre}','${libro.fecha}','${libro.precio}')">Modificar</button></td>
</tr>
        `;
    }
);
}
