angular.module('rubenMorenoApp')

    .controller('photoViewCtrl', ['$scope', function ($scope) {

        // Add smooth scrolling on [hash] links
        $scope.smoothScrolling = function (link, clickEvent) {

            if(link !== "") {
                // Prevent default anchor click behavior
                clickEvent.preventDefault();

                // Store hash
                var hash = link;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        }
    }]);
