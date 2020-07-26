import {loopAdd} from '../components/Adder'

describe('add 函数', () => {
  it('正确计算', () => {
    const result = loopAdd(1)

    expect(result).toEqual(2)
  })
  it('大于等于10的情况', () => {
    const result = loopAdd(9)

    expect(result).toEqual(0)
  })
})
