import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";

const StartGame = () => {
  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#991", flex: 1 }}>
      <Button
        onPress={() => navigation.navigate("TTTGame")}
        title="Ir para o Jogo"
      />
    </View>
  );
};

export default StartGame;
