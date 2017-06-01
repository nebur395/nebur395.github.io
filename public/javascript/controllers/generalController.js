angular.module('rubenMorenoApp')

    .controller('generalCtrl', ['$scope', function ($scope) {

        $scope.appearClass = false;
        $scope.disappearClass = false;

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
        };

        window.onscroll = function (e) {
            if($(window).scrollTop() +  window.innerHeight + 243 >= $(document).height()) {
                $scope.appearClass = false;
                $scope.disappearClass = true;
                $scope.$apply();
            } else if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                $scope.appearClass = true;
                $scope.disappearClass = false;
                $scope.$apply();
            } else if ($scope.appearClass) {
                $scope.appearClass = false;
                $scope.disappearClass = true;
                $scope.$apply();
            }
        }
    }]);
