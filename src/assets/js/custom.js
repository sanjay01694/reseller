export var wizard = function () {
    KTWizard2.init();
}
export var dropZone = function () {
    KTDropzoneDemo.init();
}
export var googleMap = function () {
    // Initialize and add the map
    function initMap() {
        // The location of Uluru
        const uluru = { lat: -25.344, lng: 131.031 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    }

    window.initMap = initMap;
}
export var timePicker = function () {
    // Class definition
    // Class definition

    var KTBootstrapTimepicker = function () {

        // Private functions
        var demos = function () {
            // minimum setup
            $('.kt_timepicker_1').timepicker();
        }
        return {
            // public functions
            init: function () {
                demos();
            }
        };
    }();
    jQuery(document).ready(function () {
        KTBootstrapTimepicker.init();
    });
}
export var showHours = function(){
    $("#btn_addhours").click(function(){
        $("#hidden_hours").show();
        $("#btn_addhours").hide();
    });
    $("#btn-cancel").click(function(){
        $("#hidden_hours").hide();
        $("#btn_addhours").show();
    });
}