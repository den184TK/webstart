ymaps.ready(init);

// Инициализация и уничтожение карты при нажатии на кнопку.
function init () {
    var myMap;

    $('#map').hover( function () {
            if (!myMap) {
                myMap = new ymaps.Map('map', {
                    center: [55.010251, 82.958437], // Новосибирск
                    zoom: 9
                }, {
                    searchControlProvider: 'yandex#search'
                });
            }
           
    });
}