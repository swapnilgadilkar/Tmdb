import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

//Register Background Handler
messaging().setBackgroundMessageHandler(remoteMessage => {
  console.log('BG_NOTIFICATION_HANDLER');
});
AppRegistry.registerComponent(appName, () => App);
