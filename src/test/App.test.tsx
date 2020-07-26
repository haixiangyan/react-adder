import {add} from '../components/Adder'

describe('add 函数', () => {
  it('正确计算', () => {
    const result = add(1)

    expect(result).toEqual(2)
  })
})
