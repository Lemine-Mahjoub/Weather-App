"use strict";
exports.__esModule = true;
exports.IndexContainer = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var AppDataContext_1 = require("@/context/AppDataContext");
var ImageSource_1 = require("@/components/ImageSource");
var expo_font_1 = require("expo-font");
var HourlyForecast_1 = require("./HourlyForecast");
exports.IndexContainer = function () {
    var _a = react_1.useContext(AppDataContext_1.AppDataContext), weatherDataDefault = _a.weatherDataDefault, loading = _a.loading, error = _a.error, defaultCity = _a.defaultCity;
    var fontsLoaded = expo_font_1.useFonts({
        'Poppins': require('@/assets/fonts/Poppins-Regular.ttf')
    })[0];
    if (!fontsLoaded) {
        return react_1["default"].createElement(react_native_1.Text, null, "Loading fonts...");
    }
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        loading && react_1["default"].createElement(react_native_1.Text, null, "Loading..."),
        error && react_1["default"].createElement(react_native_1.Text, null,
            "Error: ",
            error),
        !loading && !error && (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.View, { style: styles.actualWeather },
                react_1["default"].createElement(react_native_1.View, { style: styles.imageContainer },
                    react_1["default"].createElement(react_native_1.Image, { source: ImageSource_1.getImage({ type: weatherDataDefault === null || weatherDataDefault === void 0 ? void 0 : weatherDataDefault.description }) })),
                react_1["default"].createElement(react_native_1.Text, { style: styles.city }, defaultCity),
                react_1["default"].createElement(react_native_1.Text, { style: styles.temperature }, weatherDataDefault === null || weatherDataDefault === void 0 ? void 0 :
                    weatherDataDefault.temperature,
                    "\u00B0C")),
            react_1["default"].createElement(HourlyForecast_1["default"], { location: 'Paris' })))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 48,
        backgroundColor: '#27272A',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        padding: 24,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#71717A',
        borderRadius: 8,
        boxShadow: '0px 0px 4px 0px #DDDDDD1A'
    },
    city: {
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'Poppins',
        color: '#DDDDDD',
        paddingTop: 16
    },
    actualWeather: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
    },
    temperature: {
        fontSize: 12,
        fontWeight: '300',
        fontFamily: 'Poppins',
        color: '#64748B'
    }
});
