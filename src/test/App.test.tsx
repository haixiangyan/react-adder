import {add} from '../components/Adder'

describe('add 函数', () => {
  it('正确计算', () => {
    const result = add(1)

    expect(result).toEqual(2)
  })
  it('超过 10 的计算', () => {
    const result = add(9)

    expect(result).toEqual(0)
  })
  it('first 为负数', () => {
    const result = add(-1)

    expect(result).toEqual(0)
  })
})
