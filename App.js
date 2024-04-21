import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "./src/Navigators";

const App = () => {
  React.useEffect(() => {
    StatusBar.setBackgroundColor("#00000000");
    StatusBar.setTranslucent(true);
  }, []);

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
