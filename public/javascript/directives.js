angular.module('onirianApp', [])

    // include the 'photoView.html' into the <photoView> tag
    .directive('photoView', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/photoView.html',
            controller: 'photoViewCtrl',
            scope: {}
        }
    })

    // include the 'band.html' into the <band> tag
    .directive('band', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/band.html',
            controller: 'bandCtrl',
            scope: {}
        }
    })

    // include the 'navbar.html' into the <navbar> tag
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/navbar.html',
            controller: 'navbarCtrl',
            scope: {}
        }
    })

    // include the 'music.html' into the <music> tag
    .directive('music', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/music.html',
            controller: 'musicCtrl',
            scope: {}
        }
    })

    // include the 'customSlideshow.html' into the <custom-slideshow> tag
    .directive('customSlideshow', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/customSlideshow.html',
            controller: 'slideshowCtrl',
            scope: {}
        }
    });
