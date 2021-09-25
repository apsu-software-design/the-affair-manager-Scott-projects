"use strict";
exports.__esModule = true;
exports.Member = void 0;
var Member = /** @class */ (function () {
    function Member(n, em) {
        this.name = n;
        this.email = em;
    }
    Member.prototype.getMemberName = function () {
        return this.name;
    };
    return Member;
}());
exports.Member = Member;
