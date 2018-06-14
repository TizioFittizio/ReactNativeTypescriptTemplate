import { View } from "react-native";
import { Icon } from "native-base";
import React from "react";
import { StackNavigator } from "react-navigation";
import { Home } from "./pages/Home";
import AuthenticationContainer from "./containers/Authentication";
import { Authentication } from "./pages/Authentication";
import MenuService from "./services/MenuService";

const MenuIcon = (menuTitle: string) => (
    <View marginRight={20}>
        <Icon type="Ionicons" name="menu" onPress={
          MenuService.getInstance().openMenu.bind(MenuService.getInstance(), true, menuTitle)
        }/>
    </View>
);

export default StackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'ReactNative + Typescript!'
      }
    },
    Authentication: {
      screen: AuthenticationContainer,
      navigationOptions: {
        title: 'Authenticate',
        headerRight: MenuIcon('Authentication')
      }
    }
});