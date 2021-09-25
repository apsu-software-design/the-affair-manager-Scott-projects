"use strict";
exports.__esModule = true;
exports.Affair = void 0;
var Affair = /** @class */ (function () {
    function Affair(n, zc, d) {
        this.name = n;
        this.zipCode = zc;
        this.date = d;
        this.membersAttending = new Array();
    }
    Affair.prototype.getAffairName = function () {
        return this.name;
    };
    Affair.prototype.setAffairName = function (n) {
        this.name = n;
    };
    Affair.prototype.setDate = function (d) {
        this.date = d;
    };
    Affair.prototype.getMembersInvolved = function () {
        var list = new Array();
        this.membersAttending.forEach(function (x) {
            list.push(x.name);
        });
        return list;
    };
    return Affair;
}());
exports.Affair = Affair;
