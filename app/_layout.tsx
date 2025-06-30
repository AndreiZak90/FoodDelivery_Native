import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, //убрали видимость заголовков
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="menu" />
    </Stack>
  );
}
