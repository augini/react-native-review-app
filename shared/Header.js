import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { images } from "../styles/Global";

const Header = ({ navigation, title }) => {
  const toggleMenu = () => {
    // eslint-disable-next-line react/prop-types
    navigation.openDrawer();
  };

  return (
    <ImageBackground style={styles.header} source={images.headerBackground}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={toggleMenu}
        style={styles.icon}
      />
      <View style={styles.headerContent}>
        <Image source={images.headerImage} style={styles.headerImage} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#333",
    letterSpacing: 1,
  },
  headerContent: {
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerImage: {
    height: 26,
    width: 26,
    marginHorizontal: 10,
  },
});

export default Header;
