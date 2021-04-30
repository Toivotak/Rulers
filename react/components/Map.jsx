import React from 'react'
import { Loader } from '@googlemaps/js-api-loader'
//import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
//import { read} from '../../support/txtReading'

const Map = () => {

    //let googleMapsApiKey = read("/Api/googlemaps/maps_key.txt");
    /*
    const loader = new Loader({
        apiKey: googleMapsApiKey,
        version: "weekly",
      });
      
      loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 34.397, lng: 150.644 },
          zoom: 8,
        });
      });
*/
    return (
        <div>
            <div id="map"></div>
        </div>
    )
}

export default Map
