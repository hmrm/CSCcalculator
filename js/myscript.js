$("input").on("change", function(){ 
	$("#yearsToComplete").text(parseFloat($("#inputLoan").val()) / parseFloat($("#inputRevenue").val()))
	    })