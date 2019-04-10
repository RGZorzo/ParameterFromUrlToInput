//Name of the parameter comming from URL string ej "&param=3 => param"
var nameOfParam = 'p';
//Element input whose value we wanna set with parameters value
var input = jQuery('#traffic-source-form-input');


jQuery(document).ready(function(){
	if(jQuery('#traffic-source-form-input').length){
		var trafficSourceParameter = GetURLParameter(nameOfParam);
		if(trafficSourceParameter !== false){
			input.val(trafficSourceParameter);
		}
	}
});

function GetURLParameter(sParam) {

	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
	return false;
}
