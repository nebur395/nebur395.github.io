angular.module('rubenMorenoApp', ['pascalprecht.translate', 'ngSanitize'])

    .config(['$translateProvider', function ($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix : './i18n/',
            suffix : '.json'
        });

        $translateProvider.preferredLanguage('en');
        $translateProvider.fallbackLanguage('en');
        // Enable escaping of HTML
        $translateProvider.useSanitizeValueStrategy('sanitize'); // I added this line based on Docs wasn't before

    }])

    .filter("htmlSafe", ['$sce', function($sce) {
        return function(htmlCode){
            return $sce.trustAsHtml(htmlCode);
        };
    }]);

