"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var useGetFuturForecast_1 = require("@/hooks/useGetFuturForecast");
var HourlyForecast = function (_a) {
    var location = _a.location;
    var _b = useGetFuturForecast_1.useGetFutureForecast(location), hourlyForecast = _b.hourlyForecast, loading = _b.loading, error = _b.error;
    if (loading)
        return react_1["default"].createElement(react_native_1.Text, null, "Loading...");
    if (error)
        return react_1["default"].createElement(react_native_1.Text, null,
            "Error: ",
            error);
    return (react_1["default"].createElement(react_native_1.ScrollView, { horizontal: true, style: styles.scrollView }, hourlyForecast.map(function (hour, index) { return (react_1["default"].createElement(react_native_1.View, { key: index, style: styles.card },
        react_1["default"].createElement(react_native_1.Text, { style: styles.time }, hour.time),
        react_1["default"].createElement(react_native_1.Text, { style: styles.temperature },
            hour.temperature,
            "\u00B0C"),
        react_1["default"].createElement(react_native_1.Text, { style: styles.description }, hour.description))); })));
};
var styles = react_native_1.StyleSheet.create({
    scrollView: {
        flexDirection: 'row',
        padding: 10,
        overflow: 'scroll'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        width: 100,
        height: 100
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    temperature: {
        fontSize: 14,
        color: '#333'
    },
    description: {
        fontSize: 12,
        color: '#666'
    }
});
exports["default"] = HourlyForecast;
