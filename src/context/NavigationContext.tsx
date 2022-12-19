import { createContext, useContext, FC, ReactNode } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type NavigationContext = {
  navigation: NavigationProp<{
    key: string;
    index: number;
    routeNames: never[];
    history?: unknown[] | undefined;
    routes: any[];
    type: string;
    stale: false;}>
}

export const NavigationContext = createContext<NavigationContext | {}>({});

type Props = {
  children: ReactNode
}

export const NavigationContextProvider: FC<Props> = ({ children }) => {
  const navigation = useNavigation();
  return (
    <NavigationContext.Provider value={navigation}>
      { children }
    </NavigationContext.Provider>
  )
}
