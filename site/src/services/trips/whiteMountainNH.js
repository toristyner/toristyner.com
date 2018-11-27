export default {
  id: 'whiteMountains',
  name: 'The White Mountains',
  shortName: '',
  icon: 'something',
  states: ['NH'],
  dateRange: ['10/10/2018', '10/11/2018'],
  coordinatesToCenter: {
    latitude: 44.041601,
    longitude: -71.675379,
  },
  markers: [
    {
      id: 'lost-river-valley',
      name: 'Lost River Valley Campground',
      website: 'https://lostriver.com/',
      types: ['stay'],
      subtypes: ['camping'],
      position: {
        latitude: 44.019467,
        longitude: -71.742668,
      },
    },
    {
      id: 'udderly-delicious',
      name: 'Udderly Delicious',
      website: 'http://udderlydeliciousnh.com/',
      types: ['eat'],
      subtypes: ['icecream'],
      position: {
        latitude: 44.043194,
        longitude: -71.669952,
      },
    },
    {
      id: 'lost-river-gorges',
      name: 'Lost River Gorge & Boulder Caves',
      website: 'http://www.lostrivergorge.com/',
      position: {
        latitude: 44.037237,
        longitude: -71.784091,
      },
    },
  ],
}
