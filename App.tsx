import { AuthProvider } from 'context';
import { ThemeProvider } from 'context/theme';
import NavigationController from 'navigation/controller';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const theme = {
  ...DefaultTheme,
  roundness: 0
};

export default function App() {
  const hideKeyboard = () => Keyboard.dismiss();

  return (
    <PaperProvider theme={theme}>
      <ThemeProvider>
        <AuthProvider>
          <TouchableWithoutFeedback onPress={hideKeyboard}>
            <NavigationController />
          </TouchableWithoutFeedback>
        </AuthProvider>
      </ThemeProvider>
    </PaperProvider>
  );
}