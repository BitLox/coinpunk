coinpunk.utils = {};

// https://github.com/component/escape-html
coinpunk.utils.stripTags = function(html) {
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
};

coinpunk.utils.stringToSatoshis = function(amountAsString) {
	amountAsString = amountAsString.replace(/\./g,'');
	var amountAsInteger = 0;
	var i;
	var amountArray = amountAsString.split("");
	amountArray.reverse();
	for(i = 0; i < amountArray.length; i++)
	{
		amountAsInteger = amountAsInteger + ((parseInt(amountArray[i]))*(Math.pow(10,i)));
	}
	return amountAsInteger;
};
