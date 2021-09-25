import { Affair } from "./affair";

export class Organization {

    name: string;
    affairsInOrg: Affair[];

    public constructor(n: string){
        this.name = n;
        this.affairsInOrg = new Array();
    }

    public getOrganizationName(){
        return this.name;
    }

}