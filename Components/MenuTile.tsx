import { orange, white } from "@/constants/Colors";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");
export default function MenuTile() {
  return (
    <View style={styles.box}>
      <Image
        style={styles.imagesTile}
        source={require("../images/image/burger/burger1.png")}
      />
      <Text style={styles.textTile}>Бургеры</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: "center",
    width: Math.min(screenWidth * 0.9, 300),
    height: 170,
    borderWidth: 2,
    borderColor: orange,
    borderRadius: 10,
    padding: 10,
    backgroundColor: white,
  },
  imagesTile: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: 20,
  },
  textTile: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
});
