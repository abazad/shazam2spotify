module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'public/vendor/angular/angular.js',
      'test/lib/angular/angular-mocks.js',
      'public/js/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
