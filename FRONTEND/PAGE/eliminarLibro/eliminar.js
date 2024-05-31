window.onload = () => {
    obtenerLibros();
}
async function obteneribros() {
    let url = "../../../BACKEND/controlador/libro.php?funcion=obtener";
    let respuesta = await fetch(url);
    let datos = await respuesta.json()
    console.log(datos);
    Listar(datos)
}





async function eliminarLibro(ci) {
    let formData = new FormData();
    formData.append("ci", ci);
    let url = "../../../BACKEND/controlador/libro.php?funcion=eliminar";
    let config ={
        method:"POST",
        body:formData
        }
    let respuesta = await fetch(url,config);
    let datos = await respuesta.json()
    console.log(datos);
    alert(ci);
}


function Listar(libros) {

    let tbodyElement = document.querySelector("#cuerpoTablalibros");
    libros.forEach((libro) => {
        tbodyElement.innerHTML += `

<tr>
    <td>${libro.ci} </td>
    <td>${libro.nombre}</td>
    <td>${libro.apellido} </td>
    <td><button onclick="eliminarlibro(${libro.ci})">Eliminar</button></td>
</tr>
    `;
    }
    )
}