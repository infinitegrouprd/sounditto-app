import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Content, Container } from 'native-base'
import { ListeningButton, ListeningText } from './components'
import { colors } from '../../../styles/colors'
import TitleBar from '../../../components/title-bar/index';

class Listening extends Component {
  static options = {
    topBar: {
      visible: false,
    },
  }
renderBody() {
  return {
    content: (
      <Text
      style={{
        fontSize: 20,
        color: colors.brandPrimaryDeep,
        fontWeight: '700',
      }}
    >
      Listening
    </Text>
    )
  }
}
  render() {
    return (
      <Container>
        <TitleBar body={this.renderBody()} />
        <Content
          style={{ backgroundColor: colors.brandSecondary }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View>
            <ListeningButton>
              <ListeningText>Listen</ListeningText>
            </ListeningButton>
          </View>
        </Content>
      </Container>
    )
  }
}

export default Listening
