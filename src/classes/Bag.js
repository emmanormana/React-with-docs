export default class Bag 
{
    constructor(id, custid, custname, ownerid, ownername, itemid, itemdescription, quantity, wishid, returndate, status) 
    {
        this.id=id,
        this.custid=custid,
        this.custname=custname,
        this.ownerid=ownerid,
        this.ownername=ownername,
        this.itemid=itemid,
        this.itemdescription=itemdescription,
        this.quantity=quantity,
        this.wishid=wishid,
        this.returndate=returndate,
        this.status=status
    }
}