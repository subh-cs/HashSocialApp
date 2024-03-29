import { StyleSheet, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { firebase } from "../../config/firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore"; // or 'firebase/firestore'
// import Feed from "./Feed";
// import DummyScreen from "../components/DummyScreen";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationScreen from "./NotificationScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostScreen from "./CreatePostScreen";
import TopTabScreen from "./TopTabScreen";
import SearchScreen from "./SearchScreen";
import verticalAnimation from "../../components/verticalAnimation";
import horizontalAnimation from "../../components/horizontalAnimation";
import OtherUserProfileScreen from "./OtherUserProfileScreen";
import CommentScreen from "./CommentScreen";
import ReplyScreen from "./ReplyScreen";
import SecondComment from "./CommentScreen/SecondComment";

const Stack = createStackNavigator();

const Dashboard = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="TopTabScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TopTabScreen" component={TopTabScreen} />
        <Stack.Screen
          name="CreatePostScreen"
          component={CreatePostScreen}
          options={verticalAnimation}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="OtherUserProfileScreen"
          component={OtherUserProfileScreen}
        />
        <Stack.Screen
          name="CommentScreen"
          component={CommentScreen}
          options={horizontalAnimation}
        />
        <Stack.Screen
          name="SecondCommentScreen"
          component={SecondComment}
          options={horizontalAnimation}
        />
        <Stack.Screen
          name="ReplyScreen"
          component={ReplyScreen}
          options={horizontalAnimation}
        />

        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>

      <StatusBar backgroundColor="black" barStyle="light-content"></StatusBar>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    display: " flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
