import {add} from "../components/Adder"

describe('add 函数', () => {
  it('正确计算', () => {
    const result = add(1, 1)

    expect(result).toEqual(2)
  })

  it('处理异常', () => {
    const result = add(1, -1)

    expect(result).toEqual(0)
  })
})
