/**
 * Created by silviue on 8/10/13.
 */
 describe("calculate nextGen", function () {
  it("returns empty grid",function  (
    ) {
    expect(nextGen([[]])).toEqual([[]]);
})
  it("cell dies if only cell", function(){
    expect(nextGen([["*"]])).toEqual([["."]]);
})

  describe("identify neighbours", function(){
     var neighbours = getNeighboursFor ([[".", "*", "."]],0,1);
     expect(neighbours).toEqual([[0,0],[0,2]]);
  });
  describe("for 2 alive neighbours should identify cell for survival",function(){
    var grid = [[".", "*", "."]];
     var neighbours = getNeighboursFor (grid,0,1);
     expect(cellSurvives(grid,neighbours)).toEqual(true);

  })

  describe("single row",function(){
    it("alone cell dies",function(){
        expect(nextGen([[".", "*", "."]])).toEqual([[".",".","."]]);
    })
    it("cell surrounded by 2 cells survives",function(){
        expect(nextGen([["*", "*", "*"]])).toEqual([[".","*","."]]);
    })

})
  
});
