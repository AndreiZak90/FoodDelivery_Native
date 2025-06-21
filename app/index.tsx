import { grey, orange, white, yellow } from "@/constants/Colors";
import { Text, useColorScheme, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colorScheme = useColorScheme();

  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <ScrollView>
      <SafeAreaView style={(styles.container, themeContainerStyle)}>
        <Text style={[styles.text, themeTextStyle]}>
          Color scheme: {colorScheme}
        </Text>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 200,
  },
  lightContainer: {
    backgroundColor: yellow,
  },
  darkContainer: {
    backgroundColor: orange,
  },
  lightThemeText: {
    color: white,
  },
  darkThemeText: {
    color: grey,
  },
});
