export default class MTGCard 
{
    constructor(id, wishid, custid, spotid, spot, ownerid, owner, shelfid, itemid, itemdescription, quantity, marketprice) 
    {
        this.id = id,
        this.wishid = wishid,
        this.custid = custid,
        this.spotid = spotid
        this.spot = spot,
        this.ownerid = ownerid,
        this.owner = owner,
        this.shelfid = shelfid,
        this.itemid = itemid,
        this.itemdescription = itemdescription,
        this.quantity = quantity,
        this.marketprice = marketprice
    }
}