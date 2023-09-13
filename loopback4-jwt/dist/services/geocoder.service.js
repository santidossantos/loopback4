"use strict";
// Copyright IBM Corp. and LoopBack contributors 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeocoderProvider = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const service_proxy_1 = require("@loopback/service-proxy");
const datasources_1 = require("../datasources");
let GeocoderProvider = exports.GeocoderProvider = class GeocoderProvider {
    constructor(dataSource = new datasources_1.GeocoderDataSource()) {
        this.dataSource = dataSource;
    }
    value() {
        return (0, service_proxy_1.getService)(this.dataSource);
    }
};
exports.GeocoderProvider = GeocoderProvider = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.geocoder')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.GeocoderDataSource])
], GeocoderProvider);
//# sourceMappingURL=geocoder.service.js.map