import  { compute } from './computer';

describe('compute', () => {
  it('should return 0 if input is negative, compute()', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  })
  it('should increment the input if it is positive, compute()', () => {
    const result = compute(1);
    expect(result).toBe(2);
  })
})
