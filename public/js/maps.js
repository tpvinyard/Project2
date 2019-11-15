

let map, overlay, infoWindow;
let initialOpacity = 0.5;
let OPACITY_MAX_PIXELS = 57; // Width of opacity control image

function initializeMap() {
var mapOptions = {
    zoom: 6,
    maxZoom: 17,
    center: new google.maps.LatLng(39.8283, 268.5795),
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

// setMarkers(map);

var bounds = {
    0: [[0,  0], [0, 0]],
    1: [[0,  1], [0, 1]],
    2: [[0,  3], [0, 2]],
    3: [[0,  7], [1, 5]],
    4: [[0, 15], [2, 11]],
    5: [[0, 31], [5, 23]],
    6: [[0, 63], [11,47]]
};

infoWindow = new google.maps.InfoWindow;

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    // infoWindow.setContent('Location found.');
    // infoWindow.open(map);
    map.setCenter(pos);
    }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
    });
} else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}


var zoomLevel = 1;
var first = 1;

var overlayfull = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var zoom2 = zoom - 2;
        var x = coord.x % Math.pow(2,zoom2);
        if( x < 0 )
        {
        x = x + Math.pow(2,zoom2);
        }
    if (zoom2 < 0 ||
        bounds[zoom2][0][0] > x || x > bounds[zoom2][0][1] ||
        bounds[zoom2][1][0] > coord.y || coord.y > bounds[zoom2][1][1]) {
        return null;
    }
        return "../images/tiles/tile_" + zoom2 + "_" + x + "_" + coord.y + ".png";
                },
    tileSize: new google.maps.Size(1024, 1024)
});

var overlay9 = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var zoom2 = zoom - 3;
        var x = coord.x % Math.pow(2,zoom2);
        if( x < 0 )
        {
        x = x + Math.pow(2,zoom2);
        }
    if (zoom2 < 0 ||
        bounds[zoom2][0][0] > x || x > bounds[zoom2][0][1] ||
        bounds[zoom2][1][0] > coord.y || coord.y > bounds[zoom2][1][1]) {
        return null;
    }
        return "../images/tiles/tile_" + zoom2 + "_" + x + "_" + coord.y + ".png";
                },
    tileSize: new google.maps.Size(2048, 2048)
});

var overlay10 = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var zoom2 = zoom - 4;
        var x = coord.x % Math.pow(2,zoom2);
        if( x < 0 )
        {
        x = x + Math.pow(2,zoom2);
        }
    if (zoom2 < 0 ||
        bounds[zoom2][0][0] > x || x > bounds[zoom2][0][1] ||
        bounds[zoom2][1][0] > coord.y || coord.y > bounds[zoom2][1][1]) {
        return null;
    }
        return "../images/tiles/tile_" + zoom2 + "_" + x + "_" + coord.y + ".png";
                },
    tileSize: new google.maps.Size(4096, 4096)
});

var overlay11 = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var zoom2 = zoom - 5;
        var x = coord.x % Math.pow(2,zoom2);
        if( x < 0 )
        {
        x = x + Math.pow(2,zoom2);
        }
    if (zoom2 < 0 ||
        bounds[zoom2][0][0] > x || x > bounds[zoom2][0][1] ||
        bounds[zoom2][1][0] > coord.y || coord.y > bounds[zoom2][1][1]) {
        return null;
    }
        return "../images/tiles/tile_" + zoom2 + "_" + x + "_" + coord.y + ".png";
                },
    tileSize: new google.maps.Size(8192, 8192)
});

var overlay12 = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var zoom2 = zoom - 6;
        var x = coord.x % Math.pow(2,zoom2);
        if( x < 0 )
        {
        x = x + Math.pow(2,zoom2);
        }
    if (zoom2 < 0 ||
        bounds[zoom2][0][0] > x || x > bounds[zoom2][0][1] ||
        bounds[zoom2][1][0] > coord.y || coord.y > bounds[zoom2][1][1]) {
        return null;
    }
        return "../images/tiles/tile_" + zoom2 + "_" + x + "_" + coord.y + ".png";
                },
    tileSize: new google.maps.Size(16384, 16384)
});

var overlay13 = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var zoom2 = zoom - 7;
        var x = coord.x % Math.pow(2,zoom2);
        if( x < 0 )
        {
        x = x + Math.pow(2,zoom2);
        }
    if (zoom2 < 0 ||
        bounds[zoom2][0][0] > x || x > bounds[zoom2][0][1] ||
        bounds[zoom2][1][0] > coord.y || coord.y > bounds[zoom2][1][1]) {
        return null;
    }
        return "../images/tiles/tile_" + zoom2 + "_" + x + "_" + coord.y + ".png";
                },
    tileSize: new google.maps.Size(32768, 32768)
});

var overlay14 = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var zoom2 = zoom - 8;
        var x = coord.x % Math.pow(2,zoom2);
        if( x < 0 )
        {
        x = x + Math.pow(2,zoom2);
        }
    if (zoom2 < 0 ||
        bounds[zoom2][0][0] > x || x > bounds[zoom2][0][1] ||
        bounds[zoom2][1][0] > coord.y || coord.y > bounds[zoom2][1][1]) {
        return null;
    }
        return "../images/tiles/tile_" + zoom2 + "_" + x + "_" + coord.y + ".png";
                },
    tileSize: new google.maps.Size(65536, 65536)
});

var overlay15 = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var zoom2 = zoom - 9;
        var x = coord.x % Math.pow(2,zoom2);
        if( x < 0 )
        {
        x = x + Math.pow(2,zoom2);
        }
    if (zoom2 < 0 ||
        bounds[zoom2][0][0] > x || x > bounds[zoom2][0][1] ||
        bounds[zoom2][1][0] > coord.y || coord.y > bounds[zoom2][1][1]) {
        return null;
    }
        return "../images/tiles/tile_" + zoom2 + "_" + x + "_" + coord.y + ".png";
                },
    tileSize: new google.maps.Size(131072, 131072)
});

var overlay16 = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var zoom2 = zoom - 10;
        var x = coord.x % Math.pow(2,zoom2);
        if( x < 0 )
        {
        x = x + Math.pow(2,zoom2);
        }
    if (zoom2 < 0 ||
        bounds[zoom2][0][0] > x || x > bounds[zoom2][0][1] ||
        bounds[zoom2][1][0] > coord.y || coord.y > bounds[zoom2][1][1]) {
        return null;
    }
        return "../images/tiles/tile_" + zoom2 + "_" + x + "_" + coord.y + ".png";
                },
    tileSize: new google.maps.Size(262144, 262144)
});

var overlay17 = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
        var zoom2 = zoom - 11;
        var x = coord.x % Math.pow(2,zoom2);
        if( x < 0 )
        {
        x = x + Math.pow(2,zoom2);
        }
    if (zoom2 < 0 ||
        bounds[zoom2][0][0] > x || x > bounds[zoom2][0][1] ||
        bounds[zoom2][1][0] > coord.y || coord.y > bounds[zoom2][1][1]) {
        return null;
    }
        return "../images/tiles/tile_" + zoom2 + "_" + x + "_" + coord.y + ".png";
                },
    tileSize: new google.maps.Size(524288, 524288)
});

google.maps.event.addListener(map, 'zoom_changed', function() {
    var prevZoomLevel;
    prevZoomLevel = zoomLevel;
    var z = map.getZoom();
    z < 9 ? zoomLevel = 1 : zoomLevel = 2;
    console.log(z);
    if (prevZoomLevel !== zoomLevel || zoomLevel == 2) {
    switch (z)
    {
    case 9:
        map.overlayMapTypes.removeAt(0);
        map.overlayMapTypes.insertAt(0, overlay9);
        overlay = overlay9
        setOpacity(opacityCtrlKnob.valueX());
        break;
    case 10:
        map.overlayMapTypes.removeAt(0);
        map.overlayMapTypes.insertAt(0, overlay10);
        overlay = overlay10
        setOpacity(opacityCtrlKnob.valueX());
        break;
    case 11:
        map.overlayMapTypes.removeAt(0);
        map.overlayMapTypes.insertAt(0, overlay11);
        overlay = overlay11
        setOpacity(opacityCtrlKnob.valueX());
        break;
    case 12:
        map.overlayMapTypes.removeAt(0);
        map.overlayMapTypes.insertAt(0, overlay12);
        overlay = overlay12
        setOpacity(opacityCtrlKnob.valueX());
        break;
    case 13:
        map.overlayMapTypes.removeAt(0);
        map.overlayMapTypes.insertAt(0, overlay13);
        overlay = overlay13
        setOpacity(opacityCtrlKnob.valueX());
        break;
    case 14:
        map.overlayMapTypes.removeAt(0);
        map.overlayMapTypes.insertAt(0, overlay14);
        overlay = overlay14
        setOpacity(opacityCtrlKnob.valueX());
        break;
    case 15:
        map.overlayMapTypes.removeAt(0);
        map.overlayMapTypes.insertAt(0, overlay15);
        overlay = overlay15
        setOpacity(opacityCtrlKnob.valueX());
        break;
    case 16:
        map.overlayMapTypes.removeAt(0);
        map.overlayMapTypes.insertAt(0, overlay16);
        overlay = overlay16
        setOpacity(opacityCtrlKnob.valueX());
        break;
    case 17:
        map.overlayMapTypes.removeAt(0);
        map.overlayMapTypes.insertAt(0, overlay17);
        overlay = overlay17
        setOpacity(opacityCtrlKnob.valueX());
        break;
    default:
        map.overlayMapTypes.removeAt(0);
        map.overlayMapTypes.insertAt(0, overlayfull);
        overlay = overlayfull
        setOpacity(opacityCtrlKnob.valueX());
        break;
    }

    }
});

overlay = overlayfull
createOpacityControl(map);
map.overlayMapTypes.insertAt(0, overlayfull);

}


  
function setMarkers(map, array) {
    // Adds markers to the map.
    // var beaches = [
    //     ['Bondi Beach', 30.890542, -97.274856, 4],
    //     ['Coogee Beach', 30.923036, -97.259052, 5],
    //     ['Cronulla Beach', 30.028249, -97.157507, 3],
    //     ['Manly Beach', 30.80010128657071, -97.28747820854187, 2],
    //     ['Maroubra Beach', 30.950198, -97.259302, 1]
    // ];

    // Marker sizes are expressed as a Size of X,Y where the origin of the image
    // (0,0) is located in the top left of the image.
  
    // Origins, anchor positions and coordinates of the marker increase in the X
    // direction to the right and in the Y direction down.
    var image = {
      url: '/images/wildderness_camping.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(32, 36),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
    for (var i = 0; i < 50; i++) {
      var beach = array[i];
      var marker = new google.maps.Marker({
        position: {lat: Number.parseFloat(beach[1]), lng: Number.parseFloat(beach[2])},
        map: map,
        icon: image,
        shape: shape,
        title: beach[0],
        zIndex: beach[3]
      });
    }

    var contentString = `<div style="color: black;">Title: ${marker.title}</div>`
    // '<div id="content">'+
    // '<div id="siteNotice">'+
    // '</div>'+
    // '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    // '<div id="bodyContent">'+
    // '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    // 'sandstone rock formation in the southern part of the '+
    // 'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    // 'south west of the nearest large town, Alice Springs; 450&#160;km '+
    // '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    // 'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    // 'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    // 'Aboriginal people of the area. It has many springs, waterholes, '+
    // 'rock caves and ancient paintings. Uluru is listed as a World '+
    // 'Heritage Site.</p>'+
    // '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    // 'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    // '(last visited June 22, 2009).</p>'+
    // '</div>'+
    // '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

function createOpacityControl(map) {
        var sliderImageUrl = "opacity-slider3d7.png";

        // Create main div to hold the control.
        var opacityDiv = document.createElement('DIV');
        opacityDiv.setAttribute("style", "margin:5px;overflow-x:hidden;overflow-y:hidden;background:url(" + sliderImageUrl + ") no-repeat;width:71px;height:21px;cursor:pointer;");

        // Create knob
        var opacityKnobDiv = document.createElement('DIV');
        opacityKnobDiv.setAttribute("style", "padding:0;margin:0;overflow-x:hidden;overflow-y:hidden;background:url(" + sliderImageUrl + ") no-repeat -71px 0;width:14px;height:21px;");
        opacityDiv.appendChild(opacityKnobDiv);

        // no var => global variable
        opacityCtrlKnob = new ExtDraggableObject(opacityKnobDiv, {
                restrictY: true,
                container: opacityDiv
        });

        google.maps.event.addListener(opacityCtrlKnob, "dragend", function () {
                setOpacity(opacityCtrlKnob.valueX());
        });

        google.maps.event.addDomListener(opacityDiv, "click", function (e) {
                var left = findPosLeft(this);
                var x = e.pageX - left - 5; // - 5 as we're using a margin of 5px on the div
                opacityCtrlKnob.setValueX(x);
                setOpacity(x);
        });

        map.controls[google.maps.ControlPosition.TOP_RIGHT].push(opacityDiv);

        // Set initial value
        var initialValue = OPACITY_MAX_PIXELS*initialOpacity;
        opacityCtrlKnob.setValueX(initialValue);
        setOpacity(initialValue);
}

function setOpacity(pixelX) {
        // Range = 0 to OPACITY_MAX_PIXELS
        var value = pixelX / OPACITY_MAX_PIXELS ;
        if (value < 0) value = 0;
        if (value > 1) value = 1;
        overlay.setOpacity(value);
}

function findPosLeft(obj) {
        var curleft = 0;
        if (obj.offsetParent) {
                do {
                        curleft += obj.offsetLeft;
                } while (obj = obj.offsetParent);
                return curleft;
        }
        return undefined;
}