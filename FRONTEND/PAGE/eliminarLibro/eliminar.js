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





async function eliminarLibro(id) {
    let formData = new FormData();
    formData.append("id", id);
    let url = "../../../BACKEND/controlador/libro.php?funcion=eliminar";
    let config ={
        method:"POST",
        body:formData
        }
    let respuesta = await fetch(url,config);
    let datos = await respuesta.json()
    console.log(datos);
    alert(id);
}


function Listar(libros) {

    let tbodyElement = document.querySelector("#cuerpoTablaLibros");
    libros.forEach((libro) => {
        tbodyElement.innerHTML += `

<tr>
    <td>${libro.nombre} </td>
    <td>${libro.fecha}</td>
    <td>${libro.precio} </td>
    <td><button onclick="eliminarLibro(${libro.id})">Eliminar</button></td>
</tr>
    `;
    }
    )
}