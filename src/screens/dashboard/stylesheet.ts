import { StyleSheet } from 'react-native';
import { colors } from '@styles/colors';
import { pmHelpers } from '@styles/marginLayout';


export default StyleSheet.create({
  titleBarContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.buttonBackground,
    margin: 5
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500'
  },
  listItem: {
    marginLeft: 0,
    padding: pmHelpers.S
  }
});
