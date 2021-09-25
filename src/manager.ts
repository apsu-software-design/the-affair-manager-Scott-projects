import { stringify } from "querystring";
import { listenerCount } from "stream";

// Scott Lam
// CSCI 4602 - Assignment 2
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
        //For some reason the console says the setAffairName and setDate or undefined and I can't figure it out
        //I was trying first get the index of the name and find that in the affairList
        //Then, it should get the obj of that affair and set the name/time to what the user wants
        //I'm guessing it doesn't get the affair object exactly how I want it to be
        var affairIndex = this.affairList.findIndex(x => x.name == affairName);

        this.affairList[affairIndex].setAffairName(newTitle); //Undefined

        this.affairList[affairIndex].setDate(newTime); //Undefined

    }

    public addAffairToOrganization(nameOfAffair: string, organizationName: string) {
        var affObj = this.findName(nameOfAffair, this.affairList);
        var orgObj = this.findName(organizationName, this.organizationList);

        orgObj.push(affObj);

    }

    public getMembers(affairName: string): string[] { //Doesn't work
        //Similar to the ModifyAffair, I tried finding the name using the findName function which
        //helps find the affair object in the list
        //(Was testing a few ways to get the affairName in the list (None worked))
        //I had to put a 0 there or else it would give me an error (Worked in grabbing the first item but still error)
        //I know there is definitely something wrong with affObj but I couldn't it figure out 
        var affObj: Affair[] = this.findName(affairName, this.affairList);

        return affObj[0].getMembersInvolved(); //Undefined



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