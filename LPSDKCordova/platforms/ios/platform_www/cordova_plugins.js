cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com.liveperson.messagingSDK.lpMessagingSDK",
        "file": "plugins/com.liveperson.messagingSDK/www/lpMessagingSDK.js",
        "pluginId": "com.liveperson.messagingSDK",
        "clobbers": [
            "lpMessagingSDK"
        ]
    },
    {
        "id": "cordova-plugin-fcm.FCMPlugin",
        "file": "plugins/cordova-plugin-fcm/www/FCMPlugin.js",
        "pluginId": "cordova-plugin-fcm",
        "clobbers": [
            "FCMPlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.liveperson.messagingSDK": "0.1.0",
    "cordova-plugin-fcm": "2.1.1",
    "cordova-plugin-whitelist": "1.3.0"
};
// BOTTOM OF METADATA
});