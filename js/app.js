const personas = [
    
    
];

function mostrarPersonas(){ /* Esta funcion itera todos los elementos del arreglo y volver a desplegar toda esta info en 
    el id de personas  */
    console.log('Mostrar personas');
    let texto = '';
    for (let persona of personas){ 
        console.log(persona)
        texto += `<li>${persona.nombre} ${persona.apellido} </li>`; /*Aqui concatenamos accediendo al objeto de tipo persona y al atributo de nombre.
         Tambien hacemos lo mismo con el apellido*/
    }
    document.getElementById('personas').innerHTML = texto; /* Aqui se muestra la info en el elemento ul de html
     con el id "personas" y en la propiedad de innerHTML agregamos la variable de "texto"*/

}
function agregarPersona(){
    const forma = document.forms['forma']; /*Aqui se recupera el objeto de formulario a traves del id forma en html*/
    const nombre = forma['nombre']; 
    const apellido = forma['apellido']; 
    if (nombre.value != '' && apellido.value != ''){
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
    }
   else{
    console.log('Complete los campos')
   }
}