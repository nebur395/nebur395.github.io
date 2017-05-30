angular.module('rubenMorenoApp', [])

    // include the 'photoView.html' into the <photo-view> tag
    .directive('photoView', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/photoView.html',
            controller: 'photoViewCtrl',
            scope: {}
        }
    })

    // include the 'aboutMe.html' into the <about-me> tag
    .directive('aboutMe', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/aboutMe.html',
            controller: 'aboutMeCtrl',
            scope: {}
        }
    })

    // include the 'projects.html' into the <projects> tag
    .directive('projects', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/components/projects.html',
            controller: 'projectsCtrl',
            scope: {}
        }
    });
