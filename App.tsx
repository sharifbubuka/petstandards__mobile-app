import { AuthProvider, NavigationContextProvider } from 'context';
import { ThemeProvider } from 'context/theme';
import NavigationController from 'navigation/controller';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function App() {
  const hideKeyboard = () => Keyboard.dismiss();

  return (
    <ThemeProvider>
      <AuthProvider>
        <TouchableWithoutFeedback onPress={hideKeyboard}>
          <NavigationController />
        </TouchableWithoutFeedback>
      </AuthProvider>
    </ThemeProvider>
  );
}