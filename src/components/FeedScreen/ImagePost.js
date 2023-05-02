import {
  Alert,
  Image,
  StyleSheet,
  View,
  ImageBackground,
  Text,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CARD_HEIGHT, CARD_WIDTH } from "../../Constants";
import {
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Metrics from "./Metrics";
import Badges from "./Badges";
import UserDetails from "./UserDetails";
import BottomBar from "./BottomBar";
import { Video } from "expo-av";
import { useIsFocused } from "@react-navigation/native";

const Post = ({ item, toggleDrawer, shouldPlay, index, focusedIndex }) => {
  const [image, setImage] = useState({
    uri: !item.coverURL
      ? "https://m.timesofindia.com/photo/80045903/80045903.jpg"
      : item.coverURL,
  });

  const [videoPaused, setVideoPaused] = useState(false);

  const playVideo = () => {
    setVideoPaused(false);
  };

  const pauseVideo = () => {
    setVideoPaused(true);
  };

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={toggleDrawer}
        onPressIn={pauseVideo}
        // onPressOut={playVideo}
      >
        {item.coverType === "image" ? (
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          />
        ) : (
          <Video
            source={{ uri: item.coverURL }}
            style={styles.video}
            resizeMode="cover"
            isLooping
            shouldPlay={focusedIndex === index}
            isMuted={false}
          />
        )}
        <LinearGradient
          colors={[
            "rgba(0,0,0,1)",
            "transparent",
            "transparent",
            "rgba(0,0,0,1)",
          ]}
          style={[styles.gradient, StyleSheet.absoluteFillObject]}
        />
      </TouchableWithoutFeedback>

      <Metrics />
      <Badges />
      <UserDetails userName={item ? item.userName : "user"} />
      <BottomBar />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  video: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
