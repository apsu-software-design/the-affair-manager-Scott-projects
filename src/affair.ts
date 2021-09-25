import { isNullOrUndefined } from "util";
import { Member } from "./member";

export class Affair {
    name: string;
    zipCode: string;
    date: string;
    member: Member;
    public membersAttending: Array<Member>;

    public constructor(n:string, zc:string, d:string){
        this.name = n;
        this.zipCode = zc;
        this.date = d;
        this.membersAttending = new Array();
    }

    public getAffairName(){
        return this.name;
    }
    public setAffairName(n:string){
        this.name = n;
    }
    public setDate(d:string){
        this.date = d;
    }

    public addMemberToAffair(m: Member){
        if(this.membersAttending.indexOf(m) == -1 && (m != null)) { //Checks if member is not in affair
            this.membersAttending.push(m);
            return true;
        }
        else
            return false;
    }

    public getMembersInvolved(){
        var list = new Array<string>();

        this.membersAttending.forEach(x =>{
            list.push(x.name);
        })
        return list;
    }
}