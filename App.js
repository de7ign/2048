/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, PanResponder } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const getDirectionAndColor = ({ dx, dy }) => {
  const draggedDown = dy > 30;
  const draggedUp = dy < -30;
  const draggedLeft = dx < -30;
  const draggedRight = dx > 30;
  let dragDirection = "";

  if (draggedDown || draggedUp) {
    if (draggedDown) dragDirection += "dragged down ";
    if (draggedUp) dragDirection += "dragged up ";
  }

  if (draggedLeft || draggedRight) {
    if (draggedLeft) dragDirection += "dragged left ";
    if (draggedRight) dragDirection += "dragged right ";
  }

  if (dragDirection) return dragDirection;
};

type Props = {};
export default class App extends Component<Props> {
  handleRestartButtonPress() {
    alert("restart button clicked");
  }

  state = {
    touchFeed: "try to swipe me"
  };

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        const drag = getDirectionAndColor(gestureState);
        this.setState({
          touchFeed: drag
        });
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true
    });
  }
  render() {
    const { touchFeed } = this.state;

    const v1 = (
      <View
        style={{
          flex: 1,
          flexDirection: "row"
        }}
      />
    );
    const row = [0, 1, 2, 3];
    return (
      <View style={styles.container} {...this._panResponder.panHandlers}>
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
            <Text style={styles.text}>Score</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "gray",
              borderRadius: 5,
              marginStart: 5
            }}
          >
            <Text style={styles.text}>High Score</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            borderRadius: 5,
            width: width * 0.85,
            height: width * 0.85,
            padding: 5
          }}
        >
          {row.map(key => {
            return (
              <View key={"row" + key} style={styles.row}>
                {row.map(key_ => {
                  key_ = key_ + 1;
                  return (
                    <View key={4 * key + key_} style={styles.box}>
                      <Text style={styles.text}>Box {4 * key + key_}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
        <Text>{touchFeed}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue"
  },
  row: {
    flex: 1,
    flexDirection: "row"
  },
  box: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "white"
  },
  text: {
    textAlign: "center",
    color: "black"
  }
});
