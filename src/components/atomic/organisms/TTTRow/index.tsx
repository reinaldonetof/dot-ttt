import React from "react";
import { StyleSheet, View } from "react-native";

import TTTSquare from "../../molecules/TTTSquare";
import Separator from "../../atoms/Separator";

interface TTTRowProps {
  rowIndex: number;
}

const TTTRow = ({ rowIndex }: TTTRowProps) => {
  return (
    <View style={styles.row}>
      {Array.from({ length: 3 }).map((_ar, index) => (
        <React.Fragment key={index + rowIndex}>
          {index > 0 ? <Separator isHorizontal={false} /> : null}
          <TTTSquare index={index + rowIndex} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default TTTRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
