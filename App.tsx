import store from '@config/store';
import {Navigation} from 'navigation/navigation';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {
  notificationListener,
  requestUserPermission,
} from 'services/notification.service';

const App = () => {
  useEffect(() => {
    requestUserPermission();
    notificationListener();
  }, []);
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
