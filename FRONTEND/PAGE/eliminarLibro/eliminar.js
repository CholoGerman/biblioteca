window.onload = () => {
    obtenerUsuarios();
}
async function obtenerUsuarios() {
    let url = "../../../BACKEND/controlador/usuario.php?funcion=eliminar";
    let respuesta = await fetch(url);
    let datos = await respuesta.json()
    console.log(datos);
    Listar(datos)
}





function eliminarUsuario(ci) {
    alert(ci);
}


function Listar(usuarios) {

    let tbodyElement = document.querySelector("#cuerpoTablaUsuarios");
    usuarios.foreach((usuario) => {
        tbodyElement.innerHTML += `

<tr>
    <td>${usuario[i].ci} </td>
    <td>${usuario[i].nombre}</td>
    <td>${usuario[i].apellido} </td>
    <td><button onclcl="eliminarUsuario(${usuario[i].ci})">Eliminar</button></td>
</tr>
    `;
    }
    )
}