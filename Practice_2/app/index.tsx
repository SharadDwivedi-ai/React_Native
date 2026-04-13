import { useState } from "react";
import {
  View,
  Text,
  Button,
  Alert,
  Switch,
  ScrollView,
  TextInput,
  Pressable,
  Image,
  ImageBackground,
  StyleSheet,
  FlatList,
  StatusBar,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function HomeScreen() {
  const [value, setValue] = useState("");

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const pressMe = () => {
    Alert.alert("Button clicked");
  };
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bs",
      title: "Forth Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f33",
      title: "Five Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Six Item",
    },
  ];
  type Props = {title: string};

  const Item = ({title}: Props) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
  );
  return (
    <SafeAreaView>
      {/* <Switch value={isEnabled} onValueChange={toggleSwitch} /> */}

      {/* {
        [...Array(200)].map((_, i)=>(
          <Text key={i} style={{fontSize:15}}>{i+1} Hello! I am start learning React-Native language.</Text>
        ))
      } */}

      {/* <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{
          height: 100,
          width: 100,
        }}
      />

      <TextInput
        keyboardType="name-phone-pad"
        style={{ borderWidth: 1 }}
        onChangeText={setValue}
        value={value}
        placeholder="Enter your UserId"
        multiline
        numberOfLines={3}
      />
      <Pressable onPress={pressMe}>
        <Text>Make me Pressable</Text>
      </Pressable>
      <Button title="Click Me" onPress={pressMe} /> */}

      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Item title={item.title}/>}
        
      />
    </SafeAreaView>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

// Background image components
// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

// const App = () => (
//   <SafeAreaProvider>
//     <SafeAreaView style={styles.container} edges={['left', 'right']}>
//       <ImageBackground source={image} resizeMode="cover" style={styles.image}>
//         <Text style={styles.text}>Inside</Text>
//       </ImageBackground>
//     </SafeAreaView>
//   </SafeAreaProvider>
// );
//   const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000c0',
//   },
// });
// export default App;