"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var hooks_1 = require("../util/hooks");
var TranslationContext_1 = require("./TranslationContext");
/**
 * Creates a translation context, available to its children
 *
 * @example
 *     const MyApp = () => (
 *         <Provider store={store}>
 *             <TranslationProvider i18nProvider={i18nProvider}>
 *                 <!-- Child components go here -->
 *             </TranslationProvider>
 *         </Provider>
 *     );
 */
var TranslationProvider = function (props) {
    var i18nProvider = props.i18nProvider, children = props.children;
    var _a = hooks_1.useSafeSetState({
        locale: i18nProvider ? i18nProvider.getLocale() : 'en',
        i18nProvider: i18nProvider,
    }), state = _a[0], setState = _a[1];
    var setLocale = react_1.useCallback(function (newLocale) {
        return setState(function (state) { return (__assign(__assign({}, state), { locale: newLocale })); });
    }, [setState]);
    // Allow locale modification by including setLocale in the context
    // This can't be done in the initial state because setState doesn't exist yet
    var value = react_1.useMemo(function () { return (__assign(__assign({}, state), { setLocale: setLocale })); }, [setLocale, state]);
    return (react_1.default.createElement(TranslationContext_1.TranslationContext.Provider, { value: value }, react_1.Children.only(children)));
};
exports.default = TranslationProvider;
