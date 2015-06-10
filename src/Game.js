function nextGen (grid) {
   for (var i = 0; i < grid.length; i++) {
   	for (var j = 0; j < grid[i].length; j++) {
   		if(grid[i][j] == "*")
   		{
   			grid[i][j] = ".";
   		}
   	}
   }

   return grid;
}