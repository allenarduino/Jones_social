import React from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screens/Profile";
import SingleProfile from "../Screens/Profile";
import EditProfile from "../Screens/EditProfile";
import Icon from "react-native-vector-icons/Ionicons";
import ChooseUserImg from "../Screens/ChooseUserImg";
import ChooseCoverPhoto from "../Screens/ChooseCoverPhoto";
import UpdateUserImg from "../Screens/UpdateUserImg";
import UpdateCoverPhoto from "../Screens/UpdateCoverPhoto";
import SinglePost from "../Screens/SinglePost";

const Stack = createStackNavigator();

function ProfileStack({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile" headerMode="screen">
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: "Edit Profile"
          }}
        />

        <Stack.Screen
          name="ChooseUserImg"
          component={ChooseUserImg}
          options={{
            title: "Choose Profile Photo"
          }}
        />

        <Stack.Screen
          name="ChooseCoverPhoto"
          component={ChooseCoverPhoto}
          options={{
            title: "Choose Coverphoto"
          }}
        />

        <Stack.Screen
          name="UpdateUserImg"
          component={UpdateUserImg}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="UpdateCoverPhoto"
          component={UpdateCoverPhoto}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SinglePost"
          component={SinglePost}
          options={{
            title: "Comments"
          }}
        />
        <Stack.Screen
          name="SingleProfile"
          component={SingleProfile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ProfileStack;
