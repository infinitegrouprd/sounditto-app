////////////////////////////////////////////////////////
//           NUMBERS FOR PADDINGS AND MARGINS        //
//////////////////////////////////////////////////////
import { Dimensions, Platform } from 'react-native'
// Responsive Const
export const deviceHeight = Dimensions.get('window').height
export const deviceWidth = Dimensions.get('window').width

export const pmHelpers = {
  extraSmall: Platform.OS === 'ios' ? 6 : 8,
  small: Platform.OS === 'ios' ? 14 : 16,
  normal: Platform.OS === 'ios' ? 16 : 18,
  regular: Platform.OS === 'ios' ? 18 : 20,
  large: Platform.OS === 'ios' ? 20 : 24,
  extraLarge: Platform.OS === 'ios' ? 24 : 28,
  extra2Large: Platform.OS === 'ios' ? 30 : 32,
}
