export var wizard = function () {
    KTWizard2.init();
}
export var dropZone = function () {
    KTDropzoneDemo.init();
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
/*** Show & Hide Hidden Hours */
export var showHours = function () {
    $("#btn_addhours").click(function () {
        $("#hidden_hours").show();
        $("#btn_addhours").hide();
    });
    $("#btn-cancel").click(function () {
        $("#hidden_hours").hide();
        $("#btn_addhours").show();
    });
}
/*** Show & Hide Set Different Hidden Hours */
export var showDifferentHours = function () {
    $("#setDifferentHours").click(function () {
        $("#set_different_hidden_hours").toggle();
    });
}
export var dateRangePicker = function () {
    // Class definition

    var KTBootstrapDaterangepicker = function () {

        // Private functions
        var demos = function () {
            // minimum setup
            $('.kt_daterangepicker_1').daterangepicker({
                buttonClasses: ' btn',
                applyClass: 'btn-primary',
                cancelClass: 'btn-secondary'
            });
        }

        return {
            // public functions
            init: function () {
                demos();
            }
        };
    }();

    jQuery(document).ready(function () {
        KTBootstrapDaterangepicker.init();
    });
}
/***Show Specific Services ***/
export var specificServices = function () {
    $("#specificServicesLabel").click(function () {
        $(".hiddenCheckboxes").show();
    });
    $("#allServicesLabel").click(function () {
        $(".hiddenCheckboxes").hide();
    });
}
/**** Bootstrap Select ****/
export var ktBootstrapSelect = function () {
    // Class definition
    var KTBootstrapSelect = function () {

        // Private functions
        var demos = function () {
            // minimum setup
            $('.kt-selectpicker').selectpicker();
        }

        return {
            // public functions
            init: function () {
                demos();
            }
        };
    }();

    jQuery(document).ready(function () {
        KTBootstrapSelect.init();
    });
}
/**** Upload Menu ****/
export var FileUpload = function () {
    "use strict";
    // Class definition

    var KTDropzoneDemo = function () {
        // Private functions
        var demo1 = function () {
            // single file upload
            $('#kt_dropzone_1').dropzone({
                url: "https://keenthemes.com/scripts/void.php", // Set the url for your upload script location
                paramName: "file", // The name that will be used to transfer the file
                maxFiles: 10,
                maxFilesize: 10, // MB
                addRemoveLinks: true,
                accept: function (file, done) {
                    if (file.name == "justinbieber.jpg") {
                        done("Naha, you don't.");
                    } else {
                        done();
                    }
                }
            });
        }
        return {
            // public functions
            init: function () {
                demo1();
            }
        };
    }();

    KTUtil.ready(function () {
        KTDropzoneDemo.init();
    });
}
export var switchToggle = function(){
    var KTBootstrapSwitch = function() {

        // Private functions
        var demos = function() {
         // minimum setup
         $('[data-switch=true]').bootstrapSwitch();
        };
        
        return {
         // public functions
         init: function() {
         demos();
         },
        };
        }();
        
        jQuery(document).ready(function() {
        KTBootstrapSwitch.init();
        });
}