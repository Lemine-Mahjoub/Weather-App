"use strict";
exports.__esModule = true;
exports.IndexContainer = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var useGetWeather_1 = require("@/hooks/useGetWeather");
var useGetCityName_1 = require("@/hooks/useGetCityName");
exports.IndexContainer = function () {
    var city = useGetCityName_1.useGetCityName();
    console.log(city);
    var _a = useGetWeather_1.useGetWeather(city !== null && city !== void 0 ? city : 'Paris'), weatherData = _a.weatherData, loading = _a.loading, error = _a.error;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        react_1["default"].createElement(react_native_1.Text, null, loading ? 'Loading...' : ''),
        react_1["default"].createElement(react_native_1.Text, null, error ? error : ''),
        react_1["default"].createElement(react_native_1.Text, null, weatherData === null || weatherData === void 0 ? void 0 : weatherData.temperature),
        react_1["default"].createElement(react_native_1.Text, null, weatherData === null || weatherData === void 0 ? void 0 : weatherData.description),
        react_1["default"].createElement(react_native_1.Text, null, weatherData === null || weatherData === void 0 ? void 0 : weatherData.humidity)));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    }
});
