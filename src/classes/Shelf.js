export default class Shelf 
{
    constructor(id, custid, itemid, itemdescription, conservation, quantity, availableqty, marketprice) 
    {
        this.id = id,
        this.custid = custid,
        this.itemid = itemid,
        this.itemdescription = itemdescription,
        this.conservation = conservation,
        this.quantity = quantity,
        this.availableqty = availableqty,
        this.marketprice = marketprice
    }
}