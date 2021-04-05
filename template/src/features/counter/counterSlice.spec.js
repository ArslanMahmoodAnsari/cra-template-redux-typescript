import counter from './counterSlice'

describe('counter reducer', () => {
  it('should handle initial state', () => {
    expect(counter(undefined, {})).toEqual({value: 0})
  })

 
  it('should handle increment', () => {
    expect(
      counter({ value: 3 }, {
        type: 'counter/increment',
      })
    ).toEqual({ value: 4 });
  });


  it('should handle decrement', () => {
    expect(
      counter({ value: 4 }, {
        type: 'counter/decrement',
      })
    ).toEqual({ value: 3 });
  });


  it('should handle incrementByAmount', () => {
    expect(
      counter({ value: 10 }, {
        type: 'counter/incrementByAmount',
        payload: 2
      })
    ).toEqual({ value: 12 });
  });
})