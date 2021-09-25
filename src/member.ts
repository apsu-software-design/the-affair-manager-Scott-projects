export class Member {

    name: string;
    email: string;

    public constructor(n: string, em: string) {
        this.name = n;
        this.email = em;
    }

    public getMemberName() {
        return this.name;
    }
}