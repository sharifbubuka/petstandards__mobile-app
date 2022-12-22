import { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from "screens/marketplace";
import { 
  SavedServicesScreen, 
  ServiceScreen, 
  ServicesScreen, 
  ServiceStatusScreen 
} from "screens/marketplace/services";
import { 
  ProductsCartScreen, 
  ProductScreen, 
  ProductsScreen 
} from "screens/marketplace/products";
import { 
  MARKETPLACE_PRODUCT_SCREEN_NAMES, 
  MARKETPLACE_SCREEN_NAMES, 
  MARKETPLACE_SERVICE_SCREEN_NAMES 
} from "constants/enums/screens";

const HomeStack = createNativeStackNavigator();
const ServicesStack = createNativeStackNavigator();
const ProductsStack = createNativeStackNavigator();

const MarketplaceServicesStack: FC = () => {
  return (
    <ServicesStack.Navigator>
      <ServicesStack.Screen name={MARKETPLACE_SERVICE_SCREEN_NAMES.ALL_SERVICES} component={ServicesScreen} />
      <ServicesStack.Screen name={MARKETPLACE_SERVICE_SCREEN_NAMES.SINGLE_SERVICE} component={ServiceScreen} />
      <ServicesStack.Screen name={MARKETPLACE_SERVICE_SCREEN_NAMES.SERVICE_STATUS} component={ServiceStatusScreen} />
      <ServicesStack.Screen name={MARKETPLACE_SERVICE_SCREEN_NAMES.SAVED_SERVICES} component={SavedServicesScreen} />
    </ServicesStack.Navigator>
  )
}

const MarketplaceProductsStack: FC = () => {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen name={MARKETPLACE_PRODUCT_SCREEN_NAMES.ALL_PRODUCTS} component={ProductsScreen} />
      <ProductsStack.Screen name={MARKETPLACE_PRODUCT_SCREEN_NAMES.SINGLE_PRODUCT} component={ProductScreen} />
      <ProductsStack.Screen name={MARKETPLACE_PRODUCT_SCREEN_NAMES.PRODUCTS_CART} component={ProductsCartScreen} />
    </ProductsStack.Navigator>
  )
}

const MarketplaceStack: FC = () => {

  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={MARKETPLACE_SCREEN_NAMES.HOME} component={HomeScreen} />
      <HomeStack.Screen name={MARKETPLACE_SCREEN_NAMES.SERVICES} component={MarketplaceServicesStack} />
      <HomeStack.Screen name={MARKETPLACE_SCREEN_NAMES.PRODUCTS} component={MarketplaceProductsStack} />
    </HomeStack.Navigator>
  )
}

export default MarketplaceStack;