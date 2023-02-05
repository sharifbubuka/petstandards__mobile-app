import PrivateNavigator from 'navigation/private';
import PublicNavigator from 'navigation/public';
import { useAuth } from 'context';


function NavigationController() {
  const { currentUser } = useAuth();

  if (currentUser) return <PrivateNavigator />
  else return <PublicNavigator />
}

export default NavigationController;