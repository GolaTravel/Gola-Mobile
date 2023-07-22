import React, { useEffect, useState } from 'react';
import AppNavigation from './navigation/appNavigation';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; // Import the auth module
import './config';
import Regnav from "./navigation/regnav";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "./screens/Dashboard";


export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  //handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing)return null;

  if(!user){
    return(
        <AppNavigation />
    );
  }

  return (
      <Dashboard/>
  );





}