//your code goes here!
export class AffairManager {

    private member: Member;
    private organization:Organization;
    private affair: Affair;
    private affairList: string[];
    private organizationList: Organization[];
    private memberList: string[];

    public constructor() {
        this.affairList = new Array();
        this.organizationList = new Array();
        this.memberList = new Array();
    }

    public addMember(e: string, em: string): void {
         this.member = new Member(e, em);
         this.memberList.push(this.member.name, this.member.email);

    }

    public addAffair(affairName: string, zipCode: string, date: string/*,member?: Member*/) {
        this.affair = new Affair(affairName, zipCode, date);
        this.affairList.push(this.affair.name, this.affair.zipCode, this.affair.date);
    }

    public addOrganization(organizationName: string) {
        this.organization = new Organization(organizationName);
        this.organizationList.push(this.organization); //Adds organization to list
    }

    public addMemberToAffair(e: string, affairName: string) {

    }

    public findMemberNames(query: string): string[] {

        return this.memberList;
        //returns a list
    }

    public findAffairNames(query: string): string[] {

        return this.affairList;
        //returns a list
    }

    public findOrganizationNames(query: string): string[] {

        return
        //return this.organizationList;
        //returns a list
    }

    public modifyAffair(affairName:string, newTitle:any, newTime?:any){

    }

    public addAffairToOrganization(affairName: string, organizationName: string) {

    }

    public getMembers(affairName: string): string[] {

        return this.memberList;
    }
}


class Member {
    name: string;
    email: string;

    public constructor(n: string, em: string) {
        this.name = n;
        this.email = em;
    }
}

class Organization {
    name: string;

    public constructor(n: string){
        this.name = n;
    }

}

class Affair {
    name: string;
    zipCode: string;
    date: string

    public constructor(n:string, zc:string, d:string){
        this.name = n;
        this.zipCode = zc;
        this.date = d;
    }

}