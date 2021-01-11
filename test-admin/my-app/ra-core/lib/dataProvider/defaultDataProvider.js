"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create: function () { return Promise.resolve({ data: null }); },
    delete: function () { return Promise.resolve({ data: null }); },
    deleteMany: function () { return Promise.resolve({ data: [] }); },
    getList: function () { return Promise.resolve({ data: [], total: 0 }); },
    getMany: function () { return Promise.resolve({ data: [] }); },
    getManyReference: function () { return Promise.resolve({ data: [], total: 0 }); },
    getOne: function () { return Promise.resolve({ data: null }); },
    update: function () { return Promise.resolve({ data: null }); },
    updateMany: function () { return Promise.resolve({ data: [] }); },
};
