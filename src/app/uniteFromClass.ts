export class Unite {
    public ou: string;
    public distinguishedName: string;
    public description: string;
    public l: string;
    public Country: string;
    public postalCode: string; // Modifier le type en string
    public st: string;
    public street: string;
    
    constructor() {
        this.ou = "";
        this.distinguishedName = "";
        this.description = "";
        this.l = "";
        this.Country = "";
        this.postalCode = ""; // Affecter une chaîne de caractères vide
        this.street = "";
        this.st = "";
    }
}
