angular.module('rubenMorenoApp')

    .controller('projectsCtrl', ['$scope', function ($scope) {

        // return true if you are on mobile device
        var checkMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (checkMobile.Android() || checkMobile.BlackBerry() ||
                checkMobile.iOS() || checkMobile.Opera() || checkMobile.Windows());
            }
        };

        $scope.isMobile = checkMobile.any() ? true : false;

        $scope.projectList = [
            {
                title: "Añisclo's POI",
                link: "https://github.com/nebur395/Anisclo",
                webPage: "",
                secondaryTitle: "projects.anisclo.type",
                image: "poisAnisclo.png",
                description: "projects.anisclo.description"
            },

            {
                title: "Smart CampUZ",
                link: "https://github.com/UNIZAR-30249-2016-SmartCampUZ/smartCampUZ",
                webPage: "",
                secondaryTitle: "projects.smartCampUZ.type",
                image: "smartCampUZ.png",
                description: "projects.smartCampUZ.description"
            },

            {
                title: "No te rayes CO",
                link: "https://github.com/ProjectMOA/noTeRayesCo",
                webPage: "https://noterayesco.herokuapp.com/",
                secondaryTitle: "projects.noTeRayes.type",
                image: "noTeRayesCo.png",
                description: "projects.noTeRayes.description"
            },

            {
                title: "REC & MAKE",
                link: "https://github.com/nebur395/uCode17",
                webPage: "",
                secondaryTitle: "projects.recMake.type",
                image: "uCode.png",
                description: "projects.recMake.description"
            },

            {
                title: "Onirian Official Website",
                link: "https://github.com/nebur395/Onirian_2.0",
                webPage: "https://onirian.herokuapp.com/",
                secondaryTitle: "projects.onirian.type",
                image: "onirian.png",
                description: "projects.onirian.description"
            },

            {
                title: "AirQ",
                link: "https://github.com/wynro/airQ-web",
                webPage: "",
                secondaryTitle: "projects.airQ.type",
                image: "airQ.png",
                description: "projects.airQ.description"
            }
        ];

    }]);
