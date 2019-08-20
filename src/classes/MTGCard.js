export default class MTGCard 
{
    constructor(id,cardname, set, setcode, mtgid) 
    {
      this.id = id;
      this.name = cardname;
      this.set = set;
      this.setcode = setcode;
      this.mtgid = mtgid;
    }
}