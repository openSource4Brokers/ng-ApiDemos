# ng-ApiDemos - API demos using Angular

## Last Version

Live version here: [site](https://apidemos.vsoft.be)

This is the last combined version as both corona API and sectorcatalog API evolve in different versions. This code will not be serviced further on.

### Sector Catalog (BE insurance companies)
Visit [ngb-sectorcatalog](https://github.com/openSource4Brokers/ngb-sectorcatalog) for the lasted developments

### Corona Statistics
Visit [ngb-coronastats](https://github.com/JosVermoesen/ngb-coronastats) for the lasted developments


## API Sources used for this app

- [NovelCOVID/API](https://github.com/novelcovid/api) - [API Reference](https://corona.lmao.ninja/docs/)
- [Sector Catalog](http://app.sectorcatalog.be/SectorCatalog/)
Sector Catalog API version 1 was removed unfortunatly begin october 2020 but is now again available since begin december 2020. Please use version 2

## Getting started for developers

- [Install NodeJS](https://nodejs.org/). Hint: eventually install and use [nvm](https://medium.com/@Joachim8675309/installing-node-js-with-nvm-4dc469c977d9) for easy installing and/or switching between node versions
- Clone this repository: `git clone https://github.com/openSource4Brokers/ng-ApiDemos`.
- Run `npm install` inside the project root.
- Run `ng serve` in a terminal from the project root.
- Profit. :tada:

## Development Tools used for this app

- [NodeJS](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Angular CLI](https://www.npmjs.com/package/@angular/cli): `npm i -g @angular/cli`

## NPM packages used for this app

- [bootstrap](https://www.npmjs.com/package/bootstrap): `npm i bootstrap`
- [bootswatch](https://www.npmjs.com/package/bootswatch): `npm i bootswatch`
- [jquery](https://www.npmjs.com/package/jquery): `npm i jquery`
- [fontawesome angular](https://www.npmjs.com/package/@fortawesome/angular-fontawesome): `npm i @fortawesome/angular-fontawesome`
- [fontawesome svg core](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core): `npm i @fortawesome/fontawesome-svg-core`
- [fontawesome free sold svg icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons): `npm i @fortawesome/free-solid-svg-icons`
- [bootstrap icons](https://www.npmjs.com/package/bootstrap-icons): `npm i bootstrap-icons`
- [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap): `npm i ngx-bootstrap`
- [@ngx-translate/core](https://www.npmjs.com/package/@ngx-translate/core): `npm i @ngx-translate/core`
- [@ngx-translate/http-loader](https://www.npmjs.com/package/@ngx-translate/http-loader): `npm i @ngx-translate/http-loader`

- install all packages in one commandline: `npm i bootstrap bootswatch jquery @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons bootstrap-icons ngx-bootstrap @ngx-translate/core @ngx-translate/http-loader`

## warnings for chart.js

In angular.json, to avoid CommonJs warnings in development mode, add **allowedCommonJsDependencies** in the options section for **chart.js**:

```bash
"builder": "@angular-devkit/build-angular:browser",
          "options": {
            // other
            "allowedCommonJsDependencies": [
              "chart.js"
            ],
            // other
```

## file styles.css

For use of bootstrap, add into file styles.css:

```bash
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```

## file angular.json scripts

For use of js from bootstrap and jquiry, add into scripts section:

```bash
"scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
```

## tsconfig.json changes for using version stamp in app

Before building, set resolveJsonModule to 'true' :

```bash
"compilerOptions": {
    ...
    "resolveJsonModule": true,
    ...
```

## Good practice 1: use lazy loading modules

- Ex. sector-catalog module in modules folder: `ng generate module modules/sector-catalog --route sector-catalog --module app.module`
- Ex. corona module: `ng generate module modules/corona --route corona --module app.module`

## Good practice 2: Update and check Angular X as needed

This app is on Angular 10.  Update to latest Angular 10 with:
`ng update @angular/cli@10 @angular/core@10`

Follow the instructions eventualy for fixes
