describe("nextgen", function(){
  describe("empty grid",function(){
    it("returns empty grid",function() {
      expect(function(){nextGen("0 0")}).toThrowError("invalid input");
    });
  });

  describe("single life organism", function() {
    it("should die", function(){
      expect(nextGen("1 1 \n*")).toEqual("1 1\n.");
    });
  });
});
describe("parsing",function(){
  describe("empty grid description", function(){
    it("is not accepted",function(){
      expect(function(){Grid("0 0\n")}).toThrowError("invalid input")    
    })
  })

  describe("single life organism", function(){
    it("return grid with one organism", function(){
      expect(Grid("1 1\n*").grid).toEqual([[1]])
    })
  })

  describe("bigger grids",function(){
    it("generates structure as described by header",function(){
      var parsedGrid = Grid("2 3\n...\n...").grid;

      expect(parsedGrid.length).toEqual(2);
      expect(parsedGrid[0].length).toEqual(3);
    })
  })

  describe("2 by 2 empty grid", function(){
    xit("returns empty 2 by 2 grid", function(){
      expect(Grid("2 2\n..\n..").grid).toEqual([[0,0],[0,0]])
    })
  })
})