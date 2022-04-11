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

