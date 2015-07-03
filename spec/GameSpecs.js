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
  describe("0 by 0 grid", function(){
    it("is not accepted",function(){
      expect(function(){Grid("0 0\n")}).toThrowError("invalid input")    
    })
  })

  describe("1 by 1 grid with one asterisk", function(){
    it("returns grid with one live cell(1)", function(){
      expect(Grid("1 1\n*").grid).toEqual([[1]])
    })
  })

  describe("2 by 2 grid with only dots", function(){
    it("returns 2 by 2 grid with dead cells(0)", function(){
      expect(Grid("2 2\n..\n..").grid).toEqual([[0,0],[0,0]])
    })
  })

  describe("2 by 3 with dots and 2 asterisk", function(){
    it("returns 2 by 3 grid with 2 live cells(1) amongst dead cells(0)", function(){
      expect(Grid("2 3\n.*.\n..*").grid).toEqual([[0,1,0],[0,0,1]])
    })
  })
})