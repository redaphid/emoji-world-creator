import times from 'lodash/fp/times'

const fillWithRice = (width) => {    
  return times(() => 'ear_of_rice', width)
}
const MapGenerator = (length, width) => {
  return times(fillWithRice(100), 100)
}

export default MapGenerator
