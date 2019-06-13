/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {};
export default class App extends Component<Props> {
  handleRestartButtonPress() {
    alert("restart button clicked");
  }
  render() {
    const { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
        <View
          style={{
            width: width * 0.85,
            height: width * 0.16,
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <Icon.Button
            name="replay"
            style={{ flex: 1 }}
            onPress={this.handleRestartButtonPress}
          >
            <Text
              style={{
                fontFamily: "Arial",
                fontSize: 15,
                color: "white",
                marginEnd: 10
              }}
            >
              Restart
            </Text>
          </Icon.Button>
        </View>
        <View
          style={{
            width: width * 0.85,
            height: width * 0.2,
            marginBottom: 10,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "gray",
              borderRadius: 5,
              marginEnd: 5
            }}
          >
            <Text>Score</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "gray",
              borderRadius: 5,
              marginStart: 5
            }}
          ><Text>Highest Score</Text></View>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            borderRadius: 5,
            width: width * 0.85,
            height: width * 0.85
          }}
        ><Text>Board</Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
