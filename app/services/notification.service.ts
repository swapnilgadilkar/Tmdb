import messaging from '@react-native-firebase/messaging';
import {getLocalData, saveLocalData} from './asyncstorage.service';

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  let fcmToken = await getLocalData('fcmToken');
  if (!fcmToken) {
    try {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log('FCM_TOKEN', fcmToken);
        await saveLocalData('fcmToken', fcmToken);
      }
    } catch (e) {
      console.log('ERROR RETRIEVING FCM TOKEN', fcmToken);
    }
  }
};
// Notification caused app to open from background state
export const notificationListener = async () => {
  //Background State
  messaging().onNotificationOpenedApp(remoteMessage => {
    remoteMessage &&
      console.log('BACKGROUND STATE :::: NOTIFICATION RECEIVED', remoteMessage);
  });
  //Received in foreground
  messaging().onMessage(remoteMessage => {
    remoteMessage &&
      console.log('FOREGROUND STATE :::: NOTIFICATION RECEIVED', remoteMessage);
  });
  //Quit state
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      remoteMessage &&
        console.log(
          'QUIT STATE :::: NOTIFICATION RECEIVED',
          remoteMessage.notification,
        );
    });
};

export {requestUserPermission};
