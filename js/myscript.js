$("input").on("change", function(){ 
	$("#yearsToComplete").text(Math.ceil(parseFloat($("#inputLoan").val()) / (parseFloat($("#inputRevenue").val()) * .05)))
	    })