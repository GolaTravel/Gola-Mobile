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

