"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
var Member = (function () {
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
//# sourceMappingURL=member.js.map