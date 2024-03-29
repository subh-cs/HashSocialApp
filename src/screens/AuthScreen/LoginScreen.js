// import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
  StatusBar
} from "react-native";
import { firebase } from "../../config/firebase";
// import { StatusBar } from "expo-status-bar";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigation = useNavigation();

  const handleLogin = async (email, password) => {
    if (email === "" || password === "")
      return alert("Please fill in all fields");
    try {
      // remove whitespace
      email = email.trim();
      password = password.trim();
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log("Logged in with:", email);
      navigation.navigate("Dashboard");
    } catch (error) {
      Alert.alert(error.message);
      console.log(error.toString(error));
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: "https://user-images.githubusercontent.com/125730480/223720633-6c1e6ac0-6ff4-4c8b-8136-23aa7d97f5a5.png",
          }}
          style={{ width: 200, height: 200, margin: 20 }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
          autoCorrect={false}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleLogin(email, password)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.registerRedirect}>
          Don't have an account?{" "}
          <Text
            style={styles.registerText}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            Register Now
          </Text>
        </Text>
      </View>
      <StatusBar barStyle="black" backgroundColor="white"/>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#fc433c",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#fc433c",
    fontWeight: "700",
    fontSize: 16,
  },
  registerRedirect: {
    color: "black",
    fontWeight: "700",
    marginTop: 30,
    fontSize: 10,
  },
  registerText: {
    color: "#fc433c",
    fontWeight: "700",
    fontSize: 12,
  },
});
