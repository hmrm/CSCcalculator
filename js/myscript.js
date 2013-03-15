var changeFx = function(loan, percent, revenue){ 
    var months = (loan / ((revenue * percent) / (1200))).toFixed(0)
    if (!isNaN(months)){
	$("#monthsToComplete").text(months);
    }
};

$("input").on("change", function(){ changeFx(parseInt($("#inputBorrow").val()), $("#slider").slider("value"), parseInt($("#inputRevenue").val()))});

$(function () {
    $("#slider").slider({
	value: 2.5,
	min: .5,
	max: 5,
	step: .5,
	slide: function (event, ui) {
	    $( "#percent" ).text( ui.value + "%");
	    changeFx(parseInt($("#inputBorrow").val()), ui.value, parseInt($("#inputRevenue").val()));
	}
    });
    $( "#percent" ).text( "" + $("#slider" ).slider("value") + "%");
});