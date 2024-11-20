"use strict";
exports.__esModule = true;
exports.IndexContainer = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var AppDataContext_1 = require("@/context/AppDataContext");
exports.IndexContainer = function () {
    var _a = react_1.useContext(AppDataContext_1.AppDataContext), weatherDataDefault = _a.weatherDataDefault, loading = _a.loading, error = _a.error;
    return (react_1["default"].createElement(react_native_1.View, { style: styles.container },
        loading && react_1["default"].createElement(react_native_1.Text, null, "Loading..."),
        error && react_1["default"].createElement(react_native_1.Text, null, error),
        !loading && !error && (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(react_native_1.Text, null, weatherDataDefault === null || weatherDataDefault === void 0 ? void 0 : weatherDataDefault.temperature),
            react_1["default"].createElement(react_native_1.Text, null, weatherDataDefault === null || weatherDataDefault === void 0 ? void 0 : weatherDataDefault.description),
            react_1["default"].createElement(react_native_1.Text, null, weatherDataDefault === null || weatherDataDefault === void 0 ? void 0 : weatherDataDefault.humidity)))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'red'
    }
});
