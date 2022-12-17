import * as React from 'react';
import PrivateNavigator from 'navigation/private/PrivateNavigator';
import PublicNavigator from 'navigation/public/PublicNavigator';
import { useAuth } from "hooks/auth";

export default function MainNavigation() {
  const { loggedIn } = useAuth();

  if (loggedIn) return <PrivateNavigator />
  else return <PublicNavigator />
}