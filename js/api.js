window.addEventListener('load', getData);

function getData() {
    //Ruta y llave de la api
    const Key = 'YQgf6jrNSoelBXCkWXe8zZ1GpAHldeCHkGV6uUjb';
    const Route = `https://api.nasa.gov/planetary/apod?api_key=${Key}`;

    fetch(Route)
        .then(respuesta => respuesta.json())
        .then(resultado => viewData(resultado))
}
// funcion para obtener los datos de la api( se uso desestructuracion de datos)
function viewData({
    date,
    explanation,
    media_type, 
    title,
    url }) {
    // se obtubo el dato a mostrar y se coloca en la etiqueta html correspondiente
    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;

    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;

    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;

    const multimedia = document.querySelector('#multimedia');
    multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}">`;
}