cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-fullscreen.AndroidFullScreen",
        "file": "plugins/cordova-plugin-fullscreen/www/AndroidFullScreen.js",
        "pluginId": "cordova-plugin-fullscreen",
        "clobbers": [
            "AndroidFullScreen"
        ]
    },
    {
        "id": "cordova-plugin-screensize.screensize",
        "file": "plugins/cordova-plugin-screensize/www/screensize.js",
        "pluginId": "cordova-plugin-screensize",
        "clobbers": [
            "window.plugins.screensize"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-fullscreen": "1.1.0",
    "cordova-plugin-screensize": "1.3.1",
    "cordova-plugin-statusbar": "2.2.3"
};
// BOTTOM OF METADATA
});