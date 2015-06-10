
function getNeighboursFor (grid,i,j) {
	var neighbouringLocations = [
	[i-1,j-1],[i-1,j],[i-1,j+1],
	[i,j-1],[i,j+1],
	[i+1,j-1],[i+1,j],[i+1,j+1],
	];

	return neighbouringLocations.filter(function(loc){
		return loc[0]>=0&&loc[0]<grid.length&&loc[1]>=0&&loc[1]<grid[0].length;
	})
}
function cellSurvives (grid, neighbours) {
	return neighbours.filter(function(loc){
		return grid[loc[0]][loc[1]] === "*";
	}).length===2;

}
function nextGen (grid) {
	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			var neighbours = getNeighboursFor(grid,i,j);
			var survives = cellSurvives(neighbours);
			grid[i][j]=survives?"*":".";
			
		}
	}

	return grid;
}