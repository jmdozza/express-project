var map= L.map('main_map',
    {center:[4.671623391501315, -74.09601421683035],
        zoom:16,
        dragging:true
    });
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker=L.marker([4.671623391501315, -74.09601421683035]).addTo(map)
