import { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PAYMENT_SCREEN_NAMES } from "constants/enums/screens";

import { 
  ProductPaymentfailureScreen, 
  ProductPaymentScreen, 
  ProductPaymentSuccessScreen 
} from "screens/Payment/product";
import { 
  ServicePaymentfailureScreen,
  ServicePaymentScreen, 
  ServicePaymentSuccessScreen 
} from "screens/Payment/service";
import { 
  UpgradeSubscriptionFailureScreen, 
  UpgradeSubscriptionScreen, 
  UpgradeSubscriptionSuccessScreen 
} from "screens/Payment/subscription";

const ProductStack = createNativeStackNavigator();
const ServiceStack = createNativeStackNavigator();
const SubscriptionStack = createNativeStackNavigator();

export const ProductPaymentStack: FC = () => {

  return (
    <ProductStack.Navigator screenOptions={{ headerShown: false }}>
      <ProductStack.Screen name={PAYMENT_SCREEN_NAMES.PRODUCT_PAYMENT} component={ProductPaymentScreen} />
      <ProductStack.Screen name={PAYMENT_SCREEN_NAMES.PRODUCT_PAYMENT_SUCCESS} component={ProductPaymentSuccessScreen} />
      <ProductStack.Screen name={PAYMENT_SCREEN_NAMES.PRODUCT_PAYMENT_FAILURE} component={ProductPaymentfailureScreen} />
    </ProductStack.Navigator>
  )
}

export const ServicePaymentStack: FC = () => {

  return (
    <ServiceStack.Navigator screenOptions={{ headerShown: false }}>
      <ServiceStack.Screen name={PAYMENT_SCREEN_NAMES.SERVICE_PAYMENT} component={ServicePaymentScreen} />
      <ServiceStack.Screen name={PAYMENT_SCREEN_NAMES.SERVICE_PAYMENT_SUCCESS} component={ServicePaymentSuccessScreen} />
      <ServiceStack.Screen name={PAYMENT_SCREEN_NAMES.SERVICE_PAYMENT_FAILURE} component={ServicePaymentfailureScreen} />
    </ServiceStack.Navigator>
  )
}

export const SubscriptionPaymentStack: FC = () => {

  return (
    <SubscriptionStack.Navigator screenOptions={{ headerShown: false }}>
      <SubscriptionStack.Screen name={PAYMENT_SCREEN_NAMES.UPGRADE_SUBSCRIPTION} component={UpgradeSubscriptionScreen} />
      <SubscriptionStack.Screen name={PAYMENT_SCREEN_NAMES.UPGRADE_SUBSCRIPTION_SUCCESS} component={UpgradeSubscriptionSuccessScreen} />
      <SubscriptionStack.Screen name={PAYMENT_SCREEN_NAMES.UPGRADE_SUBSCRIPTION_FAILURE} component={UpgradeSubscriptionFailureScreen} />
    </SubscriptionStack.Navigator>
  )
}