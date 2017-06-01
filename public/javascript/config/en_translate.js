angular.module('rubenMorenoApp')

    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            "photoView": {
                "TITLE": "Who Am I?",
                "JOB": "Software Developer",
                "ABOUT": "About Me",
                "PROJECTS": "Projects"
            },
            "aboutMe": {
                "TITLE": "What Am I?",
                "INTRO": "Me llamo Rubén Moreno y soy un desarrollador front-end de Zaragoza, " +
                "España. Soy graduado en ingeniería informática en la Universidad de Zaragoza" +
                " en la promoción 2013-2017 en la especialidad de Ingeniería del Software. Me" +
                " encanta el desarrollo web, la arquitectura del software y la gestión de " +
                "proyectos y equipos siguiendo metodologías ágiles.",
                "FRONTEND": "Mi lenguaje favorito de programación es Javascript, y el framework de" +
                " desarrollo de aplicaciones de front-end que me encanta es AngularJS 1. " +
                "Siempre me gusta ir aprendiendo tecnologías nuevas y experimentar con ellas, " +
                "React y AngularJS 2 son mis próximos objetivos.",
                "BACKEND": "Como desarrollador full Stack me encanta el Stack MEAN y cuando tengo" +
                " que defenderme en el back-end también uso java con SpringBoot, aunque siempre" +
                " me ha llamado la atención Scala. También me gusta desarrollar aplicaciones " +
                "híbridas con tecnologías como el framework Ionic 2.",
                "OTHERS": "Estoy bastante acostumbrado a realizar los diseños arquitecturales de " +
                "los sistemas y tener que discutir y compartir las distintas visiones de los " +
                "mismos con otros compañeros, además de dirigir equipos pequeños de 3-5 personas" +
                " normalmente usando la metodología ágil SCRUM.",
                "PERSONAL": "Además de desarrollar software también me gusta hacer otras cosas. Me" +
                " encanta el deporte, suelo tener siempre una rutina de ejercicios y salir en " +
                "bici con el buen tiempo. La música me encanta, siempre que puedo estoy " +
                "escuchándola, me sirve mucho para concentrarme, y de vez en cuando también me " +
                "gusta tocar el piano. Viajar y sobretodo estar en naturaleza es otra de las " +
                "cosas que tengo que hacer con frecuencia y no pueden faltar en mi vida. También" +
                " disfruto mucho jugando videojuegos y me gustaría tener tiempo para poder " +
                "aprender a desarrollar alguno. Por último también me gusta desarrollar software" +
                " con mis amigos a nivel personal cuando se nos ocurren algunas ideas, o " +
                "participar con ellos mínimo una vez al año en algún hackatón importante."
            },
            "projects": {
                "TITLE": "Some of my coolest projects",
                "anisclo": {
                    "type": "Web Application - Responsive",
                    "description": "Proyecto para la universidad que consiste en una red social " +
                    "para compartir rutas y POIs de un mapa."
                },
                "smartCampUZ": {
                    "type": "Web Application - Responsive",
                    "description": "Proyecto para la universidad que consiste en una aproximación " +
                    "de una Smart City para el Campus de Unizar."
                },
                "noTeRayes": {
                    "type": "Web Application - Responsive",
                    "description": "Página web con una cuenta atrás para las fiestas del pilar de Zaragoza, España."
                },
                "recMake": {
                    "type": "Web Application - Responsive",
                    "description": "Proyecto para el hackathon uCode by Adidas 2017."
                },
                "onirian": {
                    "type": "Web Application - Responsive",
                    "description": "Página web oficial del grupo de música Onirian de Zaragoza, España."
                },
                "trainingTracker": {
                    "type": "Web Application - Responsive",
                    "description": "Proyecto para la universidad que consiste en una aplicación " +
                    "para controlarte las rutinas de tu ejercicio."
                },
                "airQ": {
                    "type": "Web Application - Responsive",
                    "description": "Proyecto para el hackathon International Space Apps Challenge 2016 de la NASA."
                }
            },
            "footer": {
                "BACKTOP": "back to top",
                "ABOUT": "About Me",
                "PROJECTS": "Projects"
            }
        });

        $translateProvider.preferredLanguage('es');

    }]);
