import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from 'styled-components/native'
// import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from './src/infrastructure/theme'
import { Navigation } from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_400Regular
} from "@expo-google-fonts/lato";
// import { Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import { SafeArea } from "./src/components/utility/safe-area.component";
import { restaurantsRequest } from "./src/services/restaurants/restaurants.service"
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";


// const Tab = createBottomTabNavigator();

// const TAB_ICON = {
//   Restaurants: "md-restaurant",
//   Map: "md-map",
//   Settings: "md-settings",
// };

// const Settings = () => (
//   <SafeArea>
//     <Text>Settings</Text>
//   </SafeArea>
// );
// const Map = () => (
//   <SafeArea>
//     <Text>Map</Text>
//   </SafeArea>
// );


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
