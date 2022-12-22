import PrivateNavigator from 'navigation/private';
import PublicNavigator from 'navigation/public';
import { useAuth } from 'context';


function NavigationController() {
  const { getCurrentUser } = useAuth();

  if (getCurrentUser()) return <PrivateNavigator />
  else return <PublicNavigator />
}

export default NavigationController;