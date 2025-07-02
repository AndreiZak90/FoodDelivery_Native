import { white } from "@/constants/Colors";
import { Image } from "expo-image";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const halfScreen = screenWidth / 2;

export default function Advertising() {
  return (
    <View style={styles.advertising}>
      <Image
        style={styles.advertisingImg}
        source={require("../assets/MainLogoImg/PizzaGIF.gif")}
      />

      <Text style={styles.advertisingText}>
        Лучшие Бургеры, Хот-Доги и Пицца
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  advertising: {
    width: screenWidth,
    position: "relative",
  },
  advertisingImg: {
    width: screenWidth,
    height: 200,
    objectFit: "cover",
  },
  advertisingText: {
    position: "absolute",
    top: 20,
    left: halfScreen - 120,
    width: 240,
    color: white,
    textAlign: "center",
    fontSize: 20,
  },
});
