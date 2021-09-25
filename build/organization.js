"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
var Organization = (function () {
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
//# sourceMappingURL=organization.js.map