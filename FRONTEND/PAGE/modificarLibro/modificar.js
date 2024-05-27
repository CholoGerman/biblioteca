window.onload = () => {

    let formElement = document.querySelector("#form_editu");
    console.log("a", formElement);
    formElement.onsubmit = async (e) => {
        e.preventDefault();
        let formFormData = new FormData(formElement);
        let url = "../../../BACKEND/controlador/usuario.php?funcion=editar";

        let config = {
            method: 'POST',
            body: formFormData

        }
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json()
        console.log(datos);



        if (datos = false) {
            alert("Error")
        }

        else {
            alert("Usuario editado")
        }
    }
    
}