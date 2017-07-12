import globex from './images/globex.jpg';
import illuminati from './images/illuminati.png'
import yakuza from './images/yakuza.jpg';
import stark from './images/stark.png';



const initialState = {
  accounts: [
    {
      id: 1,
      name: 'GlobeEx Corporation',
      type: 'Corporation',
      img: globex,
    }, {
      id: 2,
      name: 'Illuminati',
      type: 'Shadowy Monolithic Conspiracy',
      img: illuminati,
    }, {
      id: 3,
      name: 'Stark',
      type: 'Great House',
      img: stark,
    }, {
      id: 4,
      name: 'Yakuza',
      type: 'Criminal Enterprise',
      img: yakuza,
    }
  ],
  users: [
    {
      name: 'Hank Scorpio',
      org: 'GlobeEx Corporation'
    }, {
      name: 'Bob Ross',
      org: 'Illuminati'
    }, {
      name: 'Scary Tattoo Guy',
      org: 'Yakuza'
    }, {
      name: 'Arya',
      org: 'House Stark'
    }

  ]
}

export default initialState;