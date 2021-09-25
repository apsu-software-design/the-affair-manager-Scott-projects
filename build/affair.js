"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affair = void 0;
var member_1 = require("./member");
var Affair = (function () {
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
    Affair.prototype.memberAttenance = function (arr) {
        this.member = new member_1.Member(arr.name, arr.email);
        this.membersAttending.push(this.member);
    };
    Affair.prototype.getMembersInvolved = function (arr) {
        return arr.membersAttending;
    };
    return Affair;
}());
exports.Affair = Affair;
//# sourceMappingURL=affair.js.map