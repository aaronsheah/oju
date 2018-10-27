/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { createBottomTabNavigator } from 'react-navigation';

import NewsFeed from "./screens/NewsFeed";
import Live from "./screens/Live";
import Profile from "./screens/Profile";
import Volunteer from "./screens/Volunteer";

export default createBottomTabNavigator(
  {
    NewsFeed,
    Live,
    Volunteer,
    Profile,
  },
);
