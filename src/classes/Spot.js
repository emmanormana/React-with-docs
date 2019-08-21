export default class Spot 
{
    constructor(spotname, document, address, telephone, workinghours) 
    {
      this.name = spotname;
      this.document = document;
      this.address = address;
      this.telephone = telephone;
      this.workinghours = workinghours;
      this.status = 1;
    }
}