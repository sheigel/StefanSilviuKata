/**
 * Created by silviue on 8/10/13.
 */
 describe("board parsing", function () {
  it("returns empty grid",function  (
    ) {
    expect(nextGen([[]])).toEqual([[]]);
})
  it("cell dies if only cell", function(){
    expect(nextGen([["*"]])).toEqual([["."]]);
  })
});
