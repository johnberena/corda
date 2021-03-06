"use strict";
// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'moment': 'vendor/moment/moment.js',
    'underscore': 'vendor/underscore/underscore.js',
    'jquery': 'vendor/dist/jquery.js',
    'highcharts': 'vendor/highcharts/highstock.src.js',
    'ng2-bootstrap': 'vendor/ng2-bootstrap',
    'ng2-popover': 'vendor/ng2-popover',
    'ng2-select': 'vendor/ng2-select',
    'ng2-table': 'vendor/ng2-table'
};
/** User packages configuration. */
var packages = {
    'moment': {
        format: 'cjs'
    },
    'underscore': {
        format: 'cjs'
    },
    'ng2-bootstrap': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'ng2-bootstrap.js'
    },
    'ng2-popover': {
        main: 'index.js',
        defaultExtension: 'js'
    },
    'ng2-select': {
        defaultExtension: 'js'
    },
    'ng2-table': {
        defaultExtension: 'js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***************************************httpWrapperService********************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/portfolio-component',
    'app/portfolio',
    'app/valuations',
    'app/create-trade',
    'app/view-trade',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
/* beautify preserve:end */
// Apply the CLI SystemJS configuration.
System.config({
    baseURL: "/web/simmvaluationdemo",
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map