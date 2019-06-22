import { createMaterialTopTabNavigator } from "react-navigation";
import Brand from "";

export default createMaterialTopTabNavigator(
  {
    Celebs: {
      screen: Brand,
      navigationOptions: {
        TabBarLable: "Celebs",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-contacts" color={tintColor} size={20} />
        )
      }
    },
    Spotted: {
      screen: News,
      navigationOptions: {
        TabBarLable: "Spotted",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-camera" color={tintColor} size={20} />
        )
      }
    },
    this: {
      screen: CelbFeeds,
      navigationOptions: {
        TabBarLable: ".",
        tabBarIcon: ({ tintColor }) => (
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 50,
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              marginTop: -9,
              borderColor: "#ffff",
              borderWidth: 3
            }}
          >
            <Icon name="md-add" color={tintColor} size={20} />
          </View>
        )
      }
    },
    Brands: {
      screen: CelbFeeds,
      navigationOptions: {
        TabBarLable: "Brands",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-pricetags" color={tintColor} size={20} />
        )
      }
    },
    Notifications: {
      screen: CelbFeeds,
      navigationOptions: {
        TabBarLable: "Notifications",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-notifications" color={tintColor} size={20} />
        )
      }
    }
  },
  {
    activeTintColor: "white",
    shifting: false
  }
);
