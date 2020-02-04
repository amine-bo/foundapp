# FoundApp

1. ionic cordova run android

#Install packages

1. npm install @ngx-translate/core --save
2. npm install ionic4-auto-complete --save
Open angular.json and add the following to the assets array:
{
	"glob": "**/*",
	"input": "node_modules/ionic4-auto-complete/assets/",
	"output": "./assets/"
}
Open app.scss and add the following:
@import "../../node_modules/ionic4-auto-complete/auto-complete";

3. ionic cordova plugin add cordova-plugin-nativegeocoder
	npm install @ionic-native/native-geocoder

4. ionic cordova plugin add cordova-plugin-geolocation
	npm install @ionic-native/geolocation

5. ionic cordova plugin add cordova-plugin-x-socialsharing
	npm install @ionic-native/social-sharing

6. npm install --save moment ngx-moment
7. ng add @angular/material