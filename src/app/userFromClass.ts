export class User{
    public cn: string;
    public nomCompte: string;
    public prenom: string;
    public nom: string;
    public telephone: string;
    public adresseMail: string;
    public codePostal: string;
   public  Password: string;
   constructor() {
    this.cn = "";
    this.nomCompte = "";
    this.prenom = "";
    this.nom = "";
    this.telephone = "";
    this.adresseMail = ""; // Affecter une chaîne de caractères vide
    this.codePostal = "";
    this.Password= "";
}
  }