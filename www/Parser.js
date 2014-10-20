function Parser(email) {
  if (!(this instanceof Parser))
    return new Parser(email);
    this.email=email;
    this.subject_types={ 'required':'Action Required'
			 ,'recieved':'Your Apple Order'
			,'processed':'Your order is being processed'
			  ,'shipped':'Shipment Notification'
                          ,'changed':'Order Change Confirmation'
			,'cancelled':'Order Cancellation Notification'};
}


//order was placed
Parser.prototype.recieved=function()
{
  var status='canceled';
  email=this.email.email_address,
  order_id=this.email.subject.match(/\d+/);
  return {}  
  

}


//main function , determines which parser to run
Parser.prototype.type=function()
{
  for( var i in this.subject_types)
   {

     if(this.email.subject.search(this.subject_types[i]))
           return this[i]();
         
   }
   
   


}

