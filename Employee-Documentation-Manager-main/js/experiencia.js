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
       
            //Exp laboral
            document.getElementById("experience").value = '';
            document.getElementById("antiguedad1").value = '';
            document.getElementById("antiguedad2").value = '';
            document.getElementById("actividades").value = '';
            document.getElementById("cursos").value = '';
            document.getElementById("recomendation").value = '';
            //Formación Académica
           
            // document.getElementById('int_edad').value = '';
            alert('El usuario se insertó correctamente.');
        } else {
            console.log(data);
        }
    });

});

