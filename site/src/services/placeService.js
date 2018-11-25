import * as places from './places'
import { values } from 'lodash'

export const getPlaces = () => {
  return values(places)
}

export const getPlaceById = id => {
  return {
    ...places[id],
  }
}
