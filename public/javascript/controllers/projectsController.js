angular.module('rubenMorenoApp')

    .controller('projectsCtrl', ['$scope', function ($scope) {

        $scope.projectList = [
            {
                title: "Añisclo's POI",
                link: "https://github.com/nebur395/Anisclo",
                secondaryTitle: "Web Application - Responsive",
                image: "poisAnisclo.png",
                description: "Proyecto para la universidad que consiste en una red social para" +
                " compartir rutas y POIs de un mapa."
            },

            {
                title: "Smart CampUZ",
                link: "https://github.com/UNIZAR-30249-2016-SmartCampUZ/smartCampUZ",
                secondaryTitle: "Web Application - Responsive (But not optimized)",
                image: "smartCampUZ.png",
                description: "Proyecto para la universidad que consiste en una aproximación de" +
                " una Smart City para el Campus de Unizar."
            },

            {
                title: "No te rayes CO",
                link: "https://github.com/nebur395/noTeRayesCo",
                secondaryTitle: "https://noterayesco.herokuapp.com/",
                image: "noTeRayesCo.png",
                description: "Página web con una cuenta atrás para las fiestas del pilar de" +
                " Zaragoza, España."
            },

            {
                title: "REC & MAKE",
                link: "https://github.com/nebur395/uCode17",
                secondaryTitle: "Web Application - Responsive",
                image: "ruben.jpg",
                description: "Proyecto para el hackathon uCode by Adidas 2017."
            },

            {
                title: "Onirian Official Website",
                link: "https://github.com/nebur395/Onirian_2.0",
                secondaryTitle: "https://onirian.herokuapp.com/",
                image: "onirian.png",
                description: "Página web oficial del grupo de música Onirian de Zaragoza, España."
            },

            {
                title: "Training Tracker",
                link: "https://github.com/UNIZAR-30248-2016-TrainingTracker/trainingTracker",
                secondaryTitle: "Web Application - Responsive",
                image: "trainingTracker.png",
                description: "Proyecto para la universidad que consiste en una aplicación para" +
                " controlarte las rutinas de tu ejercicio."
            },

            {
                title: "AirQ",
                link: "https://github.com/wynro/airQ-web",
                secondaryTitle: "Web Application - Responsive",
                image: "ruben.jpg",
                description: "Proyecto para el hackathon International Space Apps Challenge 2016 de la NASA."
            }
        ];

    }]);
