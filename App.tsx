import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import MainNavigation from './src/navigation/main/MainNavigator';

export default function App() {
  const hideKeyboard = () => Keyboard.dismiss();

  return (
      <Provider store={store}>
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <MainNavigation />
        </TouchableWithoutFeedback>
      </Provider>
  );
}