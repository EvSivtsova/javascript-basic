const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns Mars and Maltesers when search strings equals to "Ma" and maximum price is 10', () => {
    expect(searchCandies('Ma', 10)[0]).toEqual('Mars');
    expect(searchCandies('Ma', 10)[1]).toEqual('Maltesers');
  });

  it('returns Mars when search strings equals to "Ma" and maximum price is 2', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });
  
  it("returns 'Skitties', 'Skittles', 'Starburst' when search strings equals to 'S' and maximum price is 10", () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst' ]);
  });

  it("returns 'Skitties', 'Skittles' when search strings equals to 'S' and maximum price is 4", () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });

  it("returns 'Mars', 'Maltesers' when search strings equals to 'ma' and maximum price is 10", () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
  });
});