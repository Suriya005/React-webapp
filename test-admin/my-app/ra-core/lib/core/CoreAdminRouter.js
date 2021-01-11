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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var RoutesWithLayout_1 = __importDefault(require("./RoutesWithLayout"));
var auth_1 = require("../auth");
var util_1 = require("../util");
var CoreAdminRouter = function (props) {
    var getPermissions = auth_1.useGetPermissions();
    var doLogout = auth_1.useLogout();
    var authenticated = auth_1.useAuthState().authenticated;
    var oneSecondHasPassed = util_1.useTimeout(1000);
    var _a = util_1.useSafeSetState([]), computedChildren = _a[0], setComputedChildren = _a[1];
    react_1.useEffect(function () {
        if (typeof props.children === 'function') {
            initializeResources();
        }
    }, [authenticated]); // eslint-disable-line react-hooks/exhaustive-deps
    var initializeResources = function () { return __awaiter(void 0, void 0, void 0, function () {
        var permissions, resolveChildren, childrenFuncResult, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getPermissions()];
                case 1:
                    permissions = _a.sent();
                    resolveChildren = props.children;
                    childrenFuncResult = resolveChildren(permissions);
                    if (childrenFuncResult.then) {
                        childrenFuncResult.then(function (resolvedChildren) {
                            return setComputedChildren(resolvedChildren
                                .filter(function (child) { return child; })
                                .map(function (child) { return (__assign(__assign({}, child), { props: __assign(__assign({}, child.props), { key: child.props.name }) })); }));
                        });
                    }
                    else {
                        setComputedChildren(childrenFuncResult.filter(function (child) { return child; }));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    doLogout();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var renderCustomRoutesWithoutLayout = function (route, routeProps) {
        if (route.props.render) {
            return route.props.render(__assign(__assign({}, routeProps), { title: props.title }));
        }
        if (route.props.component) {
            return react_1.createElement(route.props.component, __assign(__assign({}, routeProps), { title: props.title }));
        }
    };
    var layout = props.layout, catchAll = props.catchAll, children = props.children, customRoutes = props.customRoutes, dashboard = props.dashboard, LoadingPage = props.loading, logout = props.logout, menu = props.menu, ready = props.ready, theme = props.theme, title = props.title;
    if ((typeof children !== 'function' && !children) ||
        (Array.isArray(children) && children.length === 0)) {
        return react_1.createElement(ready);
    }
    if (typeof children === 'function' &&
        (!computedChildren || computedChildren.length === 0)) {
        if (oneSecondHasPassed) {
            return (react_1.default.createElement(react_router_dom_1.Route, { path: "/", key: "loading", render: function () { return react_1.default.createElement(LoadingPage, { theme: theme }); } }));
        }
        else {
            return null;
        }
    }
    var childrenToRender = (typeof children === 'function'
        ? computedChildren
        : children);
    return (react_1.default.createElement("div", null,
        // Render every resources children outside the React Router Switch
        // as we need all of them and not just the one rendered
        react_1.Children.map(childrenToRender, function (child) {
            return react_1.cloneElement(child, {
                key: child.props.name,
                // The context prop instructs the Resource component to not render anything
                // but simply to register itself as a known resource
                intent: 'registration',
            });
        }),
        react_1.default.createElement(react_router_dom_1.Switch, null,
            customRoutes
                .filter(function (route) { return route.props.noLayout; })
                .map(function (route, key) {
                return react_1.cloneElement(route, {
                    key: key,
                    render: function (routeProps) {
                        return renderCustomRoutesWithoutLayout(route, routeProps);
                    },
                });
            }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", render: function () {
                    return react_1.createElement(layout, {
                        dashboard: dashboard,
                        logout: logout,
                        menu: menu,
                        theme: theme,
                        title: title,
                    }, react_1.default.createElement(RoutesWithLayout_1.default, { catchAll: catchAll, customRoutes: customRoutes.filter(function (route) { return !route.props.noLayout; }), dashboard: dashboard, title: title }, react_1.Children.map(childrenToRender, function (child) {
                        return react_1.cloneElement(child, {
                            key: child.props.name,
                            intent: 'route',
                        });
                    })));
                } }))));
};
CoreAdminRouter.defaultProps = {
    customRoutes: [],
};
exports.default = CoreAdminRouter;
