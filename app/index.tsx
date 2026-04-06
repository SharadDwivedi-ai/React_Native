import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#020202",
      }}
    >
      <Text style={{
         color: "#FFFFFF",
         fontSize: 18,
         fontWeight: "bold", 
         }}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
