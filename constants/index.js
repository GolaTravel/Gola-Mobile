// we will be using this dummy data,
// don't worry, you can find this data in the git repo 
// you can find the git repo link in the description ;)

import {MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {BuildingOfficeIcon} from "react-native-heroicons/mini";
import { Icon } from 'react-native-elements'

export const categories = [
  {
    id: 1,
    title: "Hotels",
    //get icons form libry
    icon: <BuildingOfficeIcon size={25} color="#428A68" />
  },
  {
    id: 2,
    title: "Foods",
    icon: <Icon name='food' type='material-community' color='#428A68' size={25} />
  },
  {
    id: 3,
    title: "Places",
    icon: <Icon name='hiking' type='material-community' color='#428A68' size={25} />
  },
  {
    id: 4,
    title: "Adventure",
    icon: <Icon name='rowing' type='material-community' color='#428A68' size={25} />
  },
  {
    id: 5,
    title: "Cars",
    icon: <Icon name='train-car' type='material-community' color='#428A68' size={25} />
  },
]


export const destinationData = [
  {
    title: 'Osaka Castle',
    duration: '12 Days',
    distance: '400 KM',
    weather: '20 C',
    price: 1200,
    shortDescription: "Osaka Castle is a Japanese castle in Chūō-ku, Osaka, Japan. The castle is one of Japan's most famous landmarks.",
    longDescription: "Osaka Castle is a Japanese castle in Chūō-ku, Osaka, Japan. The castle is one of Japan's most famous landmarks and it played a major role in the unification of Japan during the sixteenth century of the Azuchi-Momoyama period.",
    image: require('../assets/images/1.jpeg')
  },
  {
    title: 'Island Itsukushima Shrine',
    duration: '7 Days',
    distance: '450 KM',
    weather: '30 C',
    price: 3000,
    shortDescription: "The Itsukushima shrine is one of Japan's most popular tourist attractions.",
    longDescription: "Itsukushima Shrine is a Shinto shrine on the island of Itsukushima, best known for its 'floating' torii gate. It is in the city of Hatsukaichi in Hiroshima Prefecture in Japan, accessible from the mainland by ferry at Miyajimaguchi Station.",
    image: require('../assets/images/1.jpeg')
  },

  {
    title: 'Babusar Top',
    duration: '5 Days',
    distance: '299 KM',
    weather: '14 C',
    price: 1000,
    shortDescription: "Babusar Top is a mountain pass in Pakistan at the north of the 150 km long in beautiful Kaghan Valley",
    longDescription: "Babusar Pass or Babusar Top is a mountain pass in Pakistan at the north of the 150 km long Kaghan Valley, connecting it via the Thak Nala with Chilas on the Karakoram Highway. It is the highest point in Kaghan Valley that can be easily accessed by cars.",
    image: require('../assets/images/1.jpeg')
  },
  {
    title: 'Todaiji Temple',
    duration: '20 Days',
    distance: '604 KM',
    weather: '34 C',
    price: 400,
    shortDescription: "Todaiji is one of Japan's most famous and significant temples and a landmark of Nara.",
    longDescription: "Tōdai-ji is a Buddhist temple complex that was once one of the powerful Seven Great Temples, located in the city of Nara, Japan. Though it was originally founded in the year 738 CE, Tōdai-ji was not opened until the year 752 CE.",
    image: require('../assets/images/1.jpeg')
  },
]

