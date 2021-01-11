"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCancel = exports.FETCH_CANCEL = exports.fetchError = exports.FETCH_ERROR = exports.fetchEnd = exports.FETCH_END = exports.fetchStart = exports.FETCH_START = void 0;
exports.FETCH_START = 'RA/FETCH_START';
exports.fetchStart = function () { return ({ type: exports.FETCH_START }); };
exports.FETCH_END = 'RA/FETCH_END';
exports.fetchEnd = function () { return ({ type: exports.FETCH_END }); };
exports.FETCH_ERROR = 'RA/FETCH_ERROR';
exports.fetchError = function () { return ({ type: exports.FETCH_ERROR }); };
exports.FETCH_CANCEL = 'RA/FETCH_CANCEL';
exports.fetchCancel = function () { return ({ type: exports.FETCH_CANCEL }); };
