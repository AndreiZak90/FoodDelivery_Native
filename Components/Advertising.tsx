import { white } from "@/constants/Colors";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

export default function Advertising() {
  return (
    <View style={styles.advertising}>
      <Image
        style={styles.advertisingImg}
        source={require("../images/image/hot_dog/hd1.png")}
      />
      <Text style={styles.advertisingText}>Лучшие Бургеры и Хот-Доги</Text>
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
    objectFit: "cover",
  },
  advertisingText: {
    position: "absolute",
    top: 0,
    left: 0,
    color: white,
  },
});
