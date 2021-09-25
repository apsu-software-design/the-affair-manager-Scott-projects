"use strict";
exports.__esModule = true;
exports.AffairManager = void 0;
var member_1 = require("./member");
var affair_1 = require("./affair");
var organization_1 = require("./organization");
var AffairManager = /** @class */ (function () {
    function AffairManager() {
        //Other Functions
        this.searchFunction = function (query) { return (function (x) {
            return x.name.toLowerCase() == query.toLowerCase();
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
        var memObj = this.findName(member, this.memberList);
        var affObj = this.findName(affairName, this.affairList);
        affObj.push(memObj);
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
        //var result = this.findFunction(affairName, this.affairList); //Finds if the affairName is found in the list
        var affairIndex = this.affairList.findIndex(function (x) { return x.name == affairName; });
        var findAffair = (this.findAffairNames(affairName));
        (this.findAffair(affairName)[0]).name = newTitle;
        //Undefined
        this.affairList[affairIndex].setDate(newTime); //Undefined
    };
    AffairManager.prototype.addAffairToOrganization = function (nameOfAffair, organizationName) {
        var affObj = this.findName(nameOfAffair, this.affairList);
        var orgObj = this.findName(organizationName, this.organizationList);
        orgObj.push(affObj);
    };
    AffairManager.prototype.getMembers = function (affairName) {
        var strArray;
        var affObj = this.findName(affairName, this.affairList);
        //var result: Member[] = affObj[0].getMembersInvolved();
        return affObj[0].getMembersInvolved();
    };
    AffairManager.prototype.findName = function (name, arr) {
        var obj = arr.filter(function (obj) { return obj.name == name; });
        return obj;
    };
    AffairManager.prototype.getMemberList = function () {
        var list = new Array();
    };
    AffairManager.prototype.findAffair = function (affairName) {
        return this.findName(affairName, this.affairList);
    };
    return AffairManager;
}());
exports.AffairManager = AffairManager;
