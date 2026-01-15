var map= L.map('main_map',
    {center:[4.671623391501315, -74.09601421683035],
        zoom:16,
        dragging:true
    });
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
//var marker=L.marker([4.671623391501315, -74.09601421683035]).addTo(map)

$.ajax({
    dataType: 'json',
    url: '/api/bicicletas',
    success: function(result) {
        console.log('Respuesta recibida:', result);
        if (result.bicicletas && result.bicicletas.length > 0) {
            result.bicicletas.forEach(function(bici) {
                console.log('Bici:', bici);
                L.marker(bici.ubicacion, { title: bici.id }).addTo(map);
            });
        } else {
            console.log('No hay bicicletas en la respuesta.');
        }
    },
    error: function(xhr, status, error) {
        console.error('Error en AJAX:', status, error);
    }
});
