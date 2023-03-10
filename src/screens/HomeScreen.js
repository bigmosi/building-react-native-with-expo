import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.mainView}>
        <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => {navigation.navigate("Home_to_Details", {screenNumber: 1})}}
            />
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default HomeScreen;