angular.module('rubenMorenoApp')

    .controller('generalCtrl', ['$scope', function ($scope) {

        console.log("carga 1");

        //Execute this code when view is loaded
        $scope.$on('$viewContentLoaded', function(){
            $scope.hola = "hola";
            console.log("carga 2");
        });

        $(document).ready(function() {

            // SMOOTH SCROLLING SECTION
            console.log("carga 3");
            // Add smooth scrolling on all links inside the navbar
            $("#aboutAndProjectsLinks a, #arrow").on('click', function (event) {
                console.log("carga 4");
                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {

                    // Prevent default anchor click behavior
                    event.preventDefault();

                    // Store hash
                    var hash = this.hash;

                    // Using jQuery's animate() method to add smooth page scroll
                    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function () {

                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if
            });
        });

        angular.element(function () {
            console.log("carga 5");
            // SMOOTH SCROLLING SECTION
            // Add smooth scrolling on all links inside the navbar
            $("#aboutAndProjectsLinks a, #arrow").on('click', function (event) {
                console.log("carga 6");
            });
        });

        $("#aboutAndProjectsLinks a, #arrow").on('click', function (event) {
            console.log("carga 7");
        });
    }]);
