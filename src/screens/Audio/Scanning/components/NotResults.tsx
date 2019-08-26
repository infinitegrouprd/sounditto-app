import React from 'react';
import styled from 'styled-components/native';
import { colors } from 'src/styles/colors';
import { Button, Text } from 'native-base';

const StyledText = styled.Text`
  font-size: ${props => (props.isTitle ? 24 : 14)}px;
  color: ${props => (props.isTitle ? colors.brandPrimary : colors.midGrey)};
`;
const Container = styled.View`
  align-items: center;
`;

const NotResults = () => {
  return (
    <Container>
      <StyledText isTitle>No Results</StyledText>
      {/* <StyledText isTitle={false}>

      </StyledText>  */}
      <Button block primary>
        <Text uppercase>Try again</Text>
      </Button>
    </Container>
  );
};

export default NotResults;
