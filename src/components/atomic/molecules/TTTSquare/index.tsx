import React from "react";
import { StyleSheet, Text, TouchableOpacityProps, View } from "react-native";
import TTTBox from "../../atoms/TTTBox";
import { useDimensions } from "../../../../hooks/useDimensions";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface TTTSquareProps {
  value: string;
  index: number;
  onPress: TouchableOpacityProps["onPress"];
}

const TTTSquare = ({ value, index, onPress = () => {} }: TTTSquareProps) => {
  const { boxSize } = useDimensions();

  const style = useAnimatedStyle(() => {
    return {
      opacity: withTiming(1, { duration: 500 }),
      fontSize: boxSize / 2,
    };
  });
  return (
    <TTTBox
      testID={`TTTSquare-${value}-${index}`}
      disabled={!!value}
      onPress={onPress}
    >
      <Animated.Text style={style} allowFontScaling={false}>
        {value}
      </Animated.Text>
      <View style={styles.indexContainer}>
        <Text>{index}</Text>
      </View>
    </TTTBox>
  );
};

export default TTTSquare;

const styles = StyleSheet.create({
  indexContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
