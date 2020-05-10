// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

var map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {
            lat: 1.3521,
            lng: 103.8198
        },
        mapTypeId: 'satellite'
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
    var gradient = [
        'rgba(200, 155, 0, 0)',
        'rgba(200, 255, 0, 1)',
        'rgba(200, 191, 255, 1)',
        'rgba(200, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? null : 16);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.7);
}

// Heatmap data: 500 Points
function getPoints() {
    return [
        new google.maps.LatLng(1.4163, 103.8958),
        new google.maps.LatLng(1.3776, 103.7190),
        new google.maps.LatLng(1.3362, 103.7515),
        new google.maps.LatLng(1.3100, 103.8555),
        new google.maps.LatLng(1.3383, 103.7529),
        new google.maps.LatLng(1.3668, 103.9297),
        new google.maps.LatLng(1.3394, 103.7557),
        new google.maps.LatLng(1.4597, 103.8201),
        new google.maps.LatLng(1.2838, 103.8501),
        new google.maps.LatLng(1.3351, 103.7062),
        new google.maps.LatLng(1.4610, 103.8183),
        new google.maps.LatLng(1.3140, 103.6261),
        new google.maps.LatLng(1.4076, 103.7535),
        new google.maps.LatLng(1.4541, 103.7973),
        new google.maps.LatLng(1.2944, 103.7833),
        new google.maps.LatLng(1.3372, 103.8846),
        new google.maps.LatLng(1.2943, 103.8164),
        new google.maps.LatLng(1.3016, 103.6551),
        new google.maps.LatLng(1.4561, 103.7973),
        new google.maps.LatLng(1.4318, 103.7598),
        new google.maps.LatLng(1.3114, 103.6306),
        new google.maps.LatLng(1.4192, 103.8964),
        new google.maps.LatLng(1.4561, 103.7879),
        new google.maps.LatLng(1.2978, 103.8452),
        new google.maps.LatLng(1.3175, 103.7322),
        new google.maps.LatLng(1.2882, 103.7797),
        new google.maps.LatLng(1.3060, 103.7793),
        new google.maps.LatLng(1.4612, 103.8098),
        new google.maps.LatLng(1.3279, 103.8909),
        new google.maps.LatLng(1.4319, 103.7598),
        new google.maps.LatLng(1.3107, 103.8615),
        new google.maps.LatLng(1.2821, 103.8576),
        new google.maps.LatLng(1.3215, 103.8533),
        new google.maps.LatLng(1.4107, 103.7684),
        new google.maps.LatLng(1.3037, 103.8593),
        new google.maps.LatLng(1.3358, 103.9076),
        new google.maps.LatLng(1.3169, 103.8944),
        new google.maps.LatLng(1.3106, 103.8664),
        new google.maps.LatLng(1.4057, 103.8659),
        new google.maps.LatLng(1.3331, 103.6920),
        new google.maps.LatLng(1.4374, 103.8422),
        new google.maps.LatLng(1.3446, 103.7757),
        new google.maps.LatLng(1.3288, 103.6945),
        new google.maps.LatLng(1.3106, 103.8643),
        new google.maps.LatLng(1.3063, 103.8330),
    ];
}
