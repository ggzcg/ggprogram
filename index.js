/** @format */

import {AppRegistry} from 'react-native';
import Navigators from './common/Tabnavigator';
// import Touchables from './alert';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigators);
