import MapGenerator from './MapGenerator'
import isArray from  'lodash/fp/isArray'
describe('MapGenerator', () => {
  describe('when called once', () => {

    it('should exist', () => {
      expect(MapGenerator).toBeDefined()
    })

    describe('when called  with a width and  height', () => {
      const theMap = MapGenerator(100,100)

      it('when called should return an array', () => {
        expect(isArray(theMap)).toBeTruthy()
        expect(theMap.length).toEqual(100)
        expect(theMap[0].length).toEqual(100)
      })
    })
  })
})
