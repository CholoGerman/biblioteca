window.onload = () => {
    obtenerUsuarios();
}
async function obtenerUsuarios() {
    let url = "../../../BACKEND/controlador/usuario.php?funcion=obtener";
    let respuesta = await fetch(url);
    let datos = await respuesta.json()
    console.log(datos);
    Listar(datos)
}








function Listar(usuarios) {

    let tbodyElement = document.querySelector("#cuerpoTablaUsuarios");
    usuarios.foreach((usuarios) => {
        tbodyElement.innerHTML += `

<tr>
    <td>${usuarios[i].ci} </td>
    <td>${usuarios[i].nombre}</td>
    <td>${usuarios[i].apellido} </td>
</tr>
    `;
    }
    )
}

