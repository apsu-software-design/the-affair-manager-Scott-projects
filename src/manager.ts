import { stringify } from "querystring";
import { listenerCount } from "stream";

import { Member } from "./member";
import { Affair } from "./affair";
import { Organization } from "./organization";

export class AffairManager {

    private affairList: Affair[];
    private organizationList: Organization[];
    private memberList: Member[];

    public constructor() {
        this.affairList = new Array();
        this.organizationList = new Array();
        this.memberList = new Array();
    }

    public addMember(e: string, em: string): void {
        this.memberList.push(new Member(e, em));
    }

    public addAffair(affairName: string, zipCode: string, date: string) {
        this.affairList.push(new Affair(affairName, zipCode, date));
    }

    public addOrganization(organizationName: string) {
        this.organizationList.push(new Organization(organizationName));
    }

    public addMemberToAffair(member: string, affairName: string) {
        var memObj = this.findName(member, this.memberList);
        var affObj = this.findName(affairName, this.affairList);

        affObj.push(memObj);

        
    }

    public findMemberNames(query: string): string[] {
        var sortedList = this.memberList.filter(this.searchFunction(query)).map(function (x) {
            return x.name + ' ' + x.email
        });

        return sortedList;

    }

    public findAffairNames(query: string): string[] {
        var sortedList = this.affairList.filter(this.searchFunction(query)).map(function (x) {
            return x.name + ' ' + x.zipCode + ' ' + x.date + ' ' + x.membersAttending
        })

        return sortedList;
    }

    public findOrganizationNames(query: string): string[] {
        var sortedList = this.organizationList.filter(this.searchFunction(query)).map(function (x) {
            return x.name
        })

        return sortedList;
    }

    public modifyAffair(affairName: string, newTitle: string, newTime?: any) { //Doesn't work
        var affairIndex = this.affairList.findIndex(x => x.name == affairName);

        this.affairList[affairIndex].setAffairName(newTitle); //Undefined

        this.affairList[affairIndex].setDate(newTime); //Undefined

    }

    public addAffairToOrganization(nameOfAffair: string, organizationName: string) {
        var affObj = this.findName(nameOfAffair, this.affairList);
        var orgObj = this.findName(organizationName, this.organizationList);

        orgObj.push(affObj);

    }

    public getMembers(affairName: string): string[] {
        var affObj: Affair[] = this.findName(affairName, this.affairList);

        return affObj[0].getMembersInvolved();



    }

    //Other Functions
    public searchFunction = (query) => (function (x) { //Filters the list based on the query
        return x.name.toLowerCase() == query.toLowerCase()
    });

    public findName(name: string, arr: Array<any>) {
        var obj: any[] = arr.filter(obj => { return obj.name == name });

        return obj;
    }

    public findAffair(affairName: string){
        return this.findName(affairName, this.affairList);
    }

}