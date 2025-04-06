import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { useDimensions } from "../../../../hooks/useDimensions";
import { PlayerSymbols } from "../../../../storage/useGameConfig/Models";

export interface TTTBoxProps {
  testID?: string;
  value?: PlayerSymbols;
  index: number;
  onPress: TouchableOpacityProps["onPress"];
}

const TTTBox = ({ index, onPress, value, testID = "TTTBox" }: TTTBoxProps) => {
  const { boxSize } = useDimensions();

  const style = useAnimatedStyle(() => {
    return {
      opacity: withTiming(1, { duration: 500 }),
      fontSize: boxSize / 2,
    };
  });

  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.box, { height: boxSize, width: boxSize }]}
      disabled={!!value}
      onPress={onPress}
    >
      <Animated.Text style={style} allowFontScaling={false}>
        {value}
      </Animated.Text>
      <View style={styles.indexContainer}>
        <Text>{index}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TTTBox;

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  indexContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
