import { yellow } from "@/constants/Colors";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const [showContent, setShowContent] = useState(false);
  const translateY = useRef(new Animated.Value(300)).current;
  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        setShowContent(true);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.logo, { transform: [{ translateY }] }]}
        source={require("../assets/images/orange_logo.png")}
      ></Animated.Image>
      {showContent && (
        <View>
          <Text>Здесь ваш контент</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: yellow,
    padding: 40,
  },
  logo: {
    height: 40,
    width: 200,
    resizeMode: "cover",
  },
  animLogoOne: {
    padding: "50%",
    height: 10,
  },
  animLogotwo: {
    padding: "50%",
  },
});
