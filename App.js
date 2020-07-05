import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Navigator from "./routes/Drawer";

const getFonts = () =>
  Font.loadAsync({
    "nunito-sans-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
    "nunito-sans-semibold": require("./assets/fonts/NunitoSans-SemiBold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
      />
    );
  } else {
    return <Navigator />;
  }
}
