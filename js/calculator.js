// create helper function
var $ = function (id) {
		return document.getElementById(id);
}

function calculate() {
	// get input from user
	var listPrice =
		$('list_price').valueAsNumber;

	var customerType =
		$('type').value;
}

// calculate discount percent function
var discountPercent = discPercCalc(listPrice, customerType);

// calculate discount amount function
var discount = discAmountCalc(listPrice, discountPercent);

// calculate discount price function
var discountPrice = discPriceCalc(listPrice, discount);

function discAmountCalc (listPrice, discountPercent) {
        // Calculate discount amount 
        var $discAmountCalc = (listPrice, discountPercent) {
        return discAmount;
}

function discPriceCalc (listPrice, discount) {
	var discPrice = listPrice - discount;
	return discPrice;
}

function discPercCalc (listPrice, customerType);
        // Calculate discount percent
        if (customerType == "R") {
            if (listPrice < 100)
                discountPercent = 0;
            else if (listPrice >= 100 && listPrice < 250)
                discountPercent = 10;
            else if (listPrice >= 250)
                discountPercent = 25;
        } else if (customerType == "C") {
          if (listPrice < 250)
                discountPercent = 20;
          else
                discountPercent = 30;
        }
        discountPercent = parseFloat(discountPercent);
	return discountPercent;
}

