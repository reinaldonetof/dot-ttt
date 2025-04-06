export type RootStackParamList = {
  StartGame: undefined;
  TTTGame: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
