let map, overlay, infoWindow;
let initialOpacity = 0.5;
let OPACITY_MAX_PIXELS = 57; // Width of opacity control image

function initializeMap() {
var mapOptions = {
    zoom: 4,
    maxZoom: 17,
    center: new google.maps.LatLng(39.8283, 268.5795),
    scaleControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);

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
    infoWindow.setContent('Location found.');
    infoWindow.open(map);
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