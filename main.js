document.getElementById('formulario').addEventListener('submit', function(e) {
    
    e.preventDefault();

    let form = new FormData(document.getElementById('formulario'));

    fetch('conexion.php', {
        method: 'POST',
        body: form
    })
    .then(res => res.json())
    .then(data => {
        if(data == 'true') {
            //Documentación personal
            document.getElementById("name").value = '';
            document.getElementById("pat").value = '';
            document.getElementById("mat").value = '';
            document.getElementById("birthday").value = '';
            document.getElementById("genero").value = '';
            document.getElementById("age").value = '';
            document.getElementById("estado_civil").value = '';
            document.getElementById("nacionalidad").value = '';
            document.getElementById("phone").value = '';
            document.getElementById("phone2").value = '';
            document.getElementById("correo").value = '';
            document.getElementById("rfc").value = '';
            document.getElementById("curp").value = '';
            document.getElementById("nss").value = '';
            //Exp laboral
            document.getElementById("experience").value = '';
            document.getElementById("antiguedad1").value = '';
            document.getElementById("antiguedad2").value = '';
            document.getElementById("actividades").value = '';
            document.getElementById("cursos").value = '';
            document.getElementById("recomendation").value = '';
            //Formación Académica
            document.getElementById("estudios").value = '';
            document.getElementById("institucion").value = '';
            document.getElementById("region").value = '';
            document.getElementById("date").value = '';
            document.getElementById("Lenguajes").value = '';
            document.getElementById("cursos2").value = '';
            // document.getElementById('int_edad').value = '';
            alert('El usuario se insertó correctamente.');
        } else {
            console.log(data);
        }
    });

});



/*

function obtenerDatos(){
    alert("FUnciona")
}

*/




























































