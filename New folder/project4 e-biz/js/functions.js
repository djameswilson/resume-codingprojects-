/* define your functions here */

function outputCartRow(item, total) {
    document.write('<tr>');
    document.write('<td class="painting"><img src="images/' + item.product.filename + '"></td>');
    document.write('<td>' + item.product.title + '</td>');
    document.write('<td class="center">' + item.quantity + '</td>');
    document.write('<td class="right">$' + item.product.price.toFixed(2) + '</td>');
    document.write('<td class="right">$' + total.toFixed(2) + '</td>');
    document.write('</tr>');            
}


/* function for subtotal*/
function calculateTotal(price,shipping_threshold) {  
   let subtotal = price * shipping_threshold;  
   return subtotal; 
}
/* function for tax*/
function calculateTax(subtotal, tax_rate) {
  return subtotal * tax_rate;
}
/* function for shipping*/
function calculateShipping(subtotal, shipping_threshold) {
  if (subtotal > shipping_threshold) {
    return 0;
  } else {
    return 40;
  }
}
/* function for grand total*/
function calculateGrandTotal(subtotal,tax,shipping) {  
   let grand = subtotal + tax + shipping;  
   return grand; 
}

function outputCurrency(num) {
    document.write("$" + num.toFixed(2));   
}
        
