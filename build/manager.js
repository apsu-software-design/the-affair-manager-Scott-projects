"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffairManager = void 0;
var member_1 = require("./member");
var affair_1 = require("./affair");
var organization_1 = require("./organization");
var AffairManager = (function () {
    function AffairManager() {
        this.searchFunction = function (query) { return (function (x) {
            return x.name.toLowerCase() == query.toLowerCase();
        }); };
        this.duplicateCheck = function (query) { return (function (x) {
            var check;
            if (x.name == query.name)
                return true;
            else
                return false;
        }); };
        this.affairList = new Array();
        this.organizationList = new Array();
        this.memberList = new Array();
    }
    AffairManager.prototype.addMember = function (e, em) {
        this.memberList.push(new member_1.Member(e, em));
    };
    AffairManager.prototype.addAffair = function (affairName, zipCode, date) {
        this.affairList.push(new affair_1.Affair(affairName, zipCode, date));
    };
    AffairManager.prototype.addOrganization = function (organizationName) {
        this.organizationList.push(new organization_1.Organization(organizationName));
    };
    AffairManager.prototype.addMemberToAffair = function (member, affairName) {
        var affairIndex = this.affairList.findIndex(function (x) { return x.name == affairName; });
        var memberIndex = this.memberList.findIndex(function (y) { return y.name == member; });
        var members = this.memberList[memberIndex];
        var members1 = this.memberList.filter(this.searchFunction(member));
        this.affairList[affairIndex].memberAttenance(members);
    };
    AffairManager.prototype.findMemberNames = function (query) {
        var sortedList = this.memberList.filter(this.searchFunction(query)).map(function (x) {
            return x.name + ' ' + x.email;
        });
        return sortedList;
    };
    AffairManager.prototype.findAffairNames = function (query) {
        var sortedList = this.affairList.filter(this.searchFunction(query)).map(function (x) {
            return x.name + ' ' + x.zipCode + ' ' + x.date + ' ' + x.membersAttending;
        });
        return sortedList;
    };
    AffairManager.prototype.findOrganizationNames = function (query) {
        var sortedList = this.organizationList.filter(this.searchFunction(query)).map(function (x) {
            return x.name;
        });
        return sortedList;
    };
    AffairManager.prototype.modifyAffair = function (affairName, newTitle, newTime) {
        var affairIndex = this.affairList.findIndex(function (x) { return x.name == affairName; });
        var filterList = this.affairList.filter(this.searchFunction(affairName));
        this.affairList[affairIndex].name = newTitle;
        this.affairList[affairIndex].date = newTime;
    };
    AffairManager.prototype.addAffairToOrganization = function (nameOfAffair, organizationName) {
        var organizationIndex = this.organizationList.findIndex(function (x) { return x.name == organizationName; });
        var affairsIndex = this.affairList.findIndex(function (x) { return x.name == nameOfAffair; });
        var affair = this.affairList[affairsIndex];
        this.organizationList[organizationIndex].affairsInOrg.push(affair);
    };
    AffairManager.prototype.getMembers = function (affairName) {
        var affairda = this.findAffairNames(affairName);
        var affairIndex = this.affairList.findIndex(function (x) { return x.name == affairName; });
        var memberInvolved = this.affairList.map(function (x) {
            for (var i in x.membersAttending) {
                return x.membersAttending[0].name + ' ' + x.membersAttending[0].email;
            }
        });
        var result6 = this.affairList[affairIndex].getMembersInvolved(this.affairList[affairIndex]).map(function (x) {
            return x.name + ' ' + x.email;
        });
        return result6;
    };
    return AffairManager;
}());
exports.AffairManager = AffairManager;
//# sourceMappingURL=manager.js.map