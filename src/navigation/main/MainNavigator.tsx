import * as React from 'react';
import PrivateNavigator from 'navigation/private/PrivateNavigator';
import PublicNavigator from 'navigation/public/PublicNavigator';
import { useAuth } from 'context';


export default function MainNavigation() {
  const { getCurrentUser } = useAuth();

  if (getCurrentUser()) return <PrivateNavigator />
  else return <PublicNavigator />
}