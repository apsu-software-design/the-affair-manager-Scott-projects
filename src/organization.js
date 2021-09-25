"use strict";
exports.__esModule = true;
exports.Organization = void 0;
var Organization = /** @class */ (function () {
    function Organization(n) {
        this.name = n;
        this.affairsInOrg = new Array();
    }
    Organization.prototype.getOrganizationName = function () {
        return this.name;
    };
    return Organization;
}());
exports.Organization = Organization;
