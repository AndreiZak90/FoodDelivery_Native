import Advertising from "@/Components/Advertising";
import { yellow } from "@/constants/Colors";
import { useEffect, useRef, useState } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";

import MenuTile from "@/Components/MenuTile";
import mainMenu from "../back/mainMenu";

export default function HomeScreen() {
  const [showContent, setShowContent] = useState(false);
  const translateY = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setShowContent(true);
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [translateY]);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, { transform: [{ translateY }] }]}
        source={require("../assets/images/orange_logo.png")}
      />
      {showContent && (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Advertising />
          <View style={styles.boxItem}>
            {mainMenu.map((item, index) => (
              <MenuTile key={index} item={item} />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: yellow,
    paddingTop: 40,
  },
  logo: {
    height: 40,
    width: 200,
    objectFit: "cover",
  },
  boxItem: {
    marginHorizontal: "auto",
  },
});
