import {loopAdd} from '../components/Adder'

describe('add 函数', () => {
  it('正确计算', () => {
    const result = loopAdd(1)

    expect(result).toEqual(2)
  })
  it('测试边界条件', () => {
    const result = loopAdd(9)

    expect(result).toEqual(0)
  })
})
