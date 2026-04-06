import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button } from "@react-navigation/elements";

const settings = () => {
  const [username, setUserName] = useState('');
  const [randomData, setRandomData] = useState('');

  const fetchData = () => {
    console.log(username);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data =>setRandomData(data[Math.floor(Math.random() * data.length)].name))
      .catch(error=> console.log(error))
  };    
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#FFFFFF",
        }}
      >
        Settings
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter Your Name"
        value={username}
        onChangeText={setUserName}
      />
      <Button onPress={fetchData}>Fetch Data</Button>
      <Text style={styles.repoName}>Random Repo: {randomData}</Text>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a91c1c",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  repoName:{
    fontSize: 16,
    color: "#FFFFFF",
    marginTop: 10,  
  }

});
