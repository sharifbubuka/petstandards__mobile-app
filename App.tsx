import { AuthProvider, NavigationContextProvider } from 'context';
import { TouchableWithoutFeedback, Keyboard, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import MainNavigation from './src/navigation/controller';

export default function App() {
  const hideKeyboard = () => Keyboard.dismiss();

  return (
    <AuthProvider>
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <MainNavigation />
        </TouchableWithoutFeedback>
    </AuthProvider>
  );
}