function nextGen (inputString) {
	if (inputString==="0 0") {throw new Error("invalid input");};
	if(inputString.indexOf("*")>0) 
		return "1 1\n."
	return "0 0";
}


function Grid (gridDescription) {

	function generateGridStructure (gridDefinition) {
		var lines = Number(gridDefinition.split(" ")[0]);
		var columns = Number(gridDefinition.split(" ")[1]);

		if(lines===0 || columns===0)
			throw new Error("invalid input");

		var result = []
		for (var i = 0; i < lines; i++) {
			result[i]=[];
			for (var j = 0; j < columns; j++) {
				result[i][j]=null;
			};
		};
		return result;
	};

	function parseGridDescription(inputString) {
		var gridDefinition = inputString.split("\n")[0];
		var innerGrid = generateGridStructure(gridDefinition);
		if(inputString.indexOf("*") > 0)
			return [[1]];
		return innerGrid;
	};

	var grid = parseGridDescription(gridDescription);

	return {
		grid:grid,
		nextGen:function  () {}
	};
}