import { titles, iosTypes } from "../../styles/fonts";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { pmHelpers } from "../../styles/marginLayout";

export default StyleSheet.create({
  // Custom style to label
  formLabel: {
    ...titles.body
  },
  // Custom Input
  input: {
    height: 60,
    color: colors.black
  },
  // Container for Item Components in Global Input
  itemContainer: {
    marginTop: pmHelpers.XS,
    marginBottom: pmHelpers.XS,
    marginLeft: 0,
    paddingBottom: 0
  }
});
