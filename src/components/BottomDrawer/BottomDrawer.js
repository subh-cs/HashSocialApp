import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import NavigatorModal from "./NavigatorModal";

export default function BottomDrawer({ title, description }) {
  return (
    <View style={styles.bottomDrawer}>
      {/* middle line of the drawer to drag it up and down */}
      <View style={styles.middleLine}></View>
      {/* recepie name */}
      <View>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <View>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.navigator}>
        <NavigatorModal />
      </View>
      <View style={styles.activityBar}>
        <Image
          style={styles.activityButton}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
          }}
        />
        <Image
          style={styles.activityButton}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/5662/5662990.png",
          }}
        />
        <Image
          style={styles.activityButton}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/929/929539.png",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  middleLine: {
    width: 50,
    height: 5,
    backgroundColor: "black",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "black",
    alignSelf: "center",
    margin:10
  },
  navigator: {
    marginTop: 10,
    width: "100%",
    height: "100%",
  },
  activityBar: {
    width: "80%",
    height: 40,
    backgroundColor: "white",
    bottom: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    alignSelf: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  activityButton: {
    width: 25,
    height: 25,
    resizeMode: "cover",
    // borderRadius: 50,
    margin: 10,
  },
  bottomDrawer: {
    width: "100%",
    // height: "100%",
    // backgroundColor: "white",
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "flex-start",
    // alignItems: "center",
    // position: "absolute",
    // bottom: 0,
    zIndex: 100,
  },
});
