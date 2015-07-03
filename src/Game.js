function nextGen (inputString) {
	if (inputString==="0 0") {throw new Error("invalid input");};
	if(inputString.indexOf("*")>0) 
		return "1 1\n."
	return "0 0";
}


function Grid (gridDescription) {

	function validateGridDefinition (gridDefinition) {
		var lines = Number(gridDefinition.split(" ")[0]);
		var columns = Number(gridDefinition.split(" ")[1]);

		if(lines===0 || columns===0)
			throw new Error("invalid input");	
	};

	function parseCell(cellString){
		return cellString === "." ? 0 : 1;
	}

	function parseGridDescription(inputString) {
		var gridDefinition = inputString.split("\n")[0];
		validateGridDefinition(gridDefinition);

		return inputString.split("\n").slice(1).map(
			function(el){
				var result = []; 
				for(var idx = 0; idx < el.length; idx++){ 
					result.push(parseCell(el[idx]));
				} 
				return result;
			});
		
	};

	var grid = parseGridDescription(gridDescription);

	return {
		grid:grid,
		nextGen:function  () {}
	};
}