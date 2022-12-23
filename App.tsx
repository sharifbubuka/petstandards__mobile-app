import { AuthProvider, NavigationContextProvider } from 'context';
import NavigationController from 'navigation/controller';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {
  const hideKeyboard = () => Keyboard.dismiss();

  return (
    <AuthProvider>
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <NavigationController />
        </TouchableWithoutFeedback>
    </AuthProvider>
  );
}