<template>
  <div class="map">
    <div id='map'></div>
  </div>
</template>

<style>
/*      body { 
        margin:0; padding:0; 
      }*/
  #map { 
    height: 500px;
    top:0; 
    bottom:0; 
    width:100%; 
  }
  .marker {
    background-image: url('http://www.myiconfinder.com/uploads/iconsets/256-256-73af4456d48391a40f64a3da3ec7ab6f.png');
    background-size: cover;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
  /*#popup {
    overflow-y: scroll;
    overflow-x: scroll;
  }*/

</style>

<script>
import axios from "axios";

export default {
  data:function() {
    return {
      places: [
        {
          lat: 39.74,
          long: -104.99,
          desc: "Icecream"
        },
        {
          lat: 39.74,
          long: -104.996,
          desc: "Cake"
        },
        {
          lat: 39.75,
          long: -104.99,
          desc: "Donuts"
        }

      ],
      nannies: []
     
    };
  },
  created: function() {
    axios.get("/api/nannies").then(response => {
      this.nannies = response.data;
      console.log(this.nannies);
      mapboxgl.accessToken = 'pk.eyJ1IjoiamFuaW5pdG8iLCJhIjoiY2p4YW1idm1uMTg4cTN4bG1zMjN0ZXVlNyJ9.biAgrKD6Jj3e2_FFDyj2kA';
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/janinito/cjy5lf26i0t461cs00lq19pbk', // stylesheet location
        center: [-104.99, 39.74], // starting position [lng, lat]
        zoom: 13 // starting zoom
      });
      this.nannies.forEach(function(nanny) {
        // var el = document.createElement('div');
        // el.className = 'marker';
        // create the popup
        console.log(nanny);
        var popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            // "<h3><a href="' + "/nannies" + nanny.id'">' + nanny.address + '</a></h3>"
            "<h4>Name: "+nanny.first_name+" + "+nanny_last_name+"</h4><br><h4>Address: "+nanny.address+"</h4><br><h4>Phone: "+nanny.phone_number+"</h4>"
          )
        // var popup = new mapboxgl.Popup({ offset: 25 })
        // .setText(nanny.address, nanny.address);
        //create the marker
        var marker = new mapboxgl.Marker({
        // draggable: true
        })
          .setLngLat([nanny.longitude, nanny.latitude])
          .setPopup(popup) // sets a popup on this marker
          .addTo(map);   
      });
    });
  },
 
};
</script>