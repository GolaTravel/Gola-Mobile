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

export const coffeeItems = [
  {
    id: 1,
    name: 'Black Coffee',
    price: '25.50',
    volume: '116 ml',
    stars: '4.6',
    image: require('../assets/images/coffee1.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'
  },
  
  {
    id: 2,
    name: 'Cappuccino',
    price: '15.50',
    volume: '110 ml',
    stars: '4.3',
    image: require('../assets/images/coffee2.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'
  },
  
  {
    id: 3,
    name: 'Espresso',
    price: '30.00',
    volume: '100 ml',
    stars: '4.0',
    image: require('../assets/images/coffee3.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
  
  {
    id: 4,
    name: 'Latte',
    price: '10.30',
    volume: '80 ml',
    stars: '3.5',
    image: require('../assets/images/coffee4.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
  
  {
    id: 5,
    name: 'Mocha',
    price: '23.10',
    volume: '120 ml',
    stars: '4.7',
    image: require('../assets/images/coffee5.png'),
    desc: 'The taste of coffee can vary depending on factors such as the type of beans, roast level, brewing method, and the addition of any flavors or sweeteners.'  },
  

]