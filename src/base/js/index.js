// Vendor
import '../../vendor/vendor'

// Components
import '../../components/components'

if(document.querySelector('[id="map"]')) ymaps.ready(init);

function init() {
  let map = new ymaps.Map('map', {
    center: [55.77206977373309,37.3915745],
    zoom: 16.5,
  });

  let placemark = new ymaps.Placemark([55.77206977373309,37.3915745], {
    hintContent: '',
    balloonContent: ''
  }, {
    iconLayout: 'default#image',
    iconImageSize: [38, 55],
    iconImageOffset: [-25, -40]
  });

  map.geoObjects.add(placemark);
}