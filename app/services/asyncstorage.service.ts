import AsyncStorage from '@react-native-async-storage/async-storage';

const saveLocalData = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log('Failed to save the data to the storage');
  }
};

const getLocalData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return (value !== null && value) || '';
  } catch (e) {
    console.log('Failed to fetch the input from storage');
  }
};

const clearLocalStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('Failed to clear the async storage.');
  }
};

const clearLocalStorageKey = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log('Failed to clear the async storage.');
  }
};

export {saveLocalData, getLocalData, clearLocalStorage, clearLocalStorageKey};
