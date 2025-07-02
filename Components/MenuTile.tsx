import { orange, white } from "@/constants/Colors";
import { Link } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width: screenWidth } = Dimensions.get("window");

interface ItemCardProps {
  item: any;
}

export default function MenuTile({ item }: ItemCardProps) {
  return (
    <Link href={"/menu"}>
      <View style={styles.box}>
        <Image style={styles.imagesTile} source={item.img} />
        <Text style={styles.textTile}>{item.name}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: Math.min(screenWidth * 0.9, 300),
    height: 130,
    borderWidth: 2,
    borderColor: orange,
    borderRadius: 22,
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: white,
  },
  imagesTile: {
    width: 120,
    height: 120,
    objectFit: "cover",
    borderRadius: 20,
  },
  textTile: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
