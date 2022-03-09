const sales=[
    {item: 'PS4 Pro', stock: 3, original:399.99 },
    {item: 'Xbox One X' , stock: 1, original: 499.99, discount:0.1},
    {item: 'Nintendo Switch' , stock: 4, original: 299.99},
    {item: 'PS2 Console' , stock: 1, original: 299.99, discount:0.8},
    {item: 'Nintendo 64' , stock: 2, original: 199.99, discount:0.65}

];
totalPrice(sales);

function totalPrice()
{
    const salesArr=[];
    for(a=0;a<sales.length;a++)
    {
        if(sales[a].discount==null)
          {
            var finalPrice=sales[a].original;
          }
        else{
              finalPrice=sales[a].original-(sales[a].original* sales[a].discount);
        }
             var totalSales=0;
              totalSales= finalPrice*sales[a].stock;
             var Item = sales[a].item;
            var Stock = sales[a].stock;
            var OriginalPrice = sales[a].original;
            var Discount = sales[a].discount;
            var FinalPrice = finalPrice;
            var Total = totalSales;
            salesArr.push({Item, Stock, OriginalPrice, Discount, FinalPrice, Total});
        
    }
    console.log(salesArr);
}