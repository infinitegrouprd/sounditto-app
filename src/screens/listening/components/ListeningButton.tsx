import styled from 'styled-components/native'
import { colors } from '@styles/colors'

export default styled.TouchableOpacity`
  width: 200px;
  height: 200px;
  border-radius: 100;
  background-color: ${colors.brandPrimaryLight};
  justify-content: center;
  align-items: center;
  border-color: ${colors.brandPrimaryDeep};
  border-width: 0.5;
`
