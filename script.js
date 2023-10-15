// create the module and name it kossiAdanou
var kossiAdanou = angular.module('kossiAdanou', ['ngRoute']);

// configure our routes
kossiAdanou.config(function ($routeProvider) {
    $routeProvider

            // route for the home page
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController'
            })          
            // route for the contact page
            .when('/experiences', {
                templateUrl: 'pages/experiences.html',
                controller: 'experienceController'
            })
            
              .when('/centres-interets', {
                templateUrl: 'pages/interets.html',
                controller: 'interetsController'
            })
            
              // route for the contact page
            .when('/references', {
                templateUrl: 'pages/references.html',
                controller: 'referencesController'
            })
            
             .when('/vie-journee', {
                templateUrl: 'pages/journee.html',
                controller: 'journeeController'
            })
            
            // route for the about page
            .when('/distinctions-prix', {
                templateUrl: 'pages/distinctions.html',
                controller: 'distinctionController'
            })
            
             // route for the about page
            .when('/travaux-scientifiques-projets', {
                templateUrl: 'pages/travaux.html',
                controller: 'travauxController'
            })
            
            //Troisiemme colone
              // route for the about page
            .when('/competences', {
                templateUrl: 'pages/competences.html',
                controller: 'competencesController'
            })
            .when('/education', {
                templateUrl: 'pages/education.html',
                controller: 'educationController'
            })
            .when('/langues', {
                templateUrl: 'pages/langues.html',
                controller: 'languesController'
            })
            
             .when('/volontariat', {
                templateUrl: 'pages/volontariat.html',
                controller: 'volontariatController'
            })
          
            .when('/technologie-economie-politique', {
                templateUrl: 'pages/actualites.html',
                controller: 'actualiteController'
            });
            
});

// create the controller and inject Angular's $scope
kossiAdanou.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

kossiAdanou.controller('distinctionController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

kossiAdanou.controller('referencesController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

kossiAdanou.controller('experienceController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

kossiAdanou.controller('journeeController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

kossiAdanou.controller('travauxController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
kossiAdanou.controller('referenceController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});


kossiAdanou.controller('interetsController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

kossiAdanou.controller('travauxController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

kossiAdanou.controller('competencesController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
kossiAdanou.controller('educationController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
kossiAdanou.controller('languesController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
kossiAdanou.controller('volontariatController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
kossiAdanou.controller('actualiteController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});
