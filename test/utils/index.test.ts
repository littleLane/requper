import { getDataType, isType } from '../../src/utils'
import { DefTypes } from '../../src/utils/constants'

describe('Testing for utils index', () => {
  describe('Testing for getDataType', () => {
    it('should get correctly type', () => {
      expect(typeof getDataType()).toBe('string')
      expect(typeof getDataType('')).toBe('string')
    })

    it('should get correctly value', () => {
      expect(getDataType()).toBe('Undefined')
      expect(getDataType('')).toBe('String')
    })
  })

  describe('Testing for isType', () => {
    it('should get correctly type', () => {
      expect(typeof isType(undefined, DefTypes.UNDEFINED)).toBe('boolean')
      expect(typeof isType('', DefTypes.NUMBER)).toBe('boolean')
    })

    it('should get correctly value', () => {
      expect(isType(undefined, DefTypes.UNDEFINED)).toBeTruthy()
      expect(isType('', DefTypes.NUMBER)).toBeFalsy()
    })
  })
})
