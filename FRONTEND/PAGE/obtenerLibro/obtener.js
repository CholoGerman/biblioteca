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

async function obtenerLibrosOrdenados(e) {
    console.log(e.target.value);
    let url = "../../../BACKEND/controlador/libro.php?funcion=obtener?modo="+e.target.value;
    let respuesta = await fetch(url);
    let datos = await respuesta.json()
    console.log(datos);
    Listar_orden(datos)
}



function Listar(libros) {
    let tbodyElement = document.querySelector("#cuerpoTablaLibros");
    libros.forEach((libro) => {
        tbodyElement.innerHTML += `

<tr>
    <td>${libro.nombre} </td>
    <td>${libro.fecha}</td>
    <td>${libro.precio} </td>
</tr>
    `;
    }
    )
}

function Listar_orden() {
    let tbodyElement = document.querySelector("#cuerpoTablaLibros");
    libros.forEach((libro) => {
        tbodyElement.innerHTML += `

<tr>
    <td>${libro.nombre} </td>
    <td>${libro.fecha}</td>
    <td>${libro.precio} </td>
</tr>
    `;
    }
    )
}