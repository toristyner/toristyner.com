import * as trips from './trips'
import { values } from 'lodash'

export const getTrips = () => {
  return values(trips)
}

export const getTripById = id => {
  return trips[id]
}

export const getPlaceById = (tripId, placeId) => {
  return trips[tripId].markers.find(m => m.id === placeId)
}
