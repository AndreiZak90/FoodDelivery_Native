import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Link href={"/"}>
        <Text>получилось</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
