import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Content, Container } from 'native-base'
import ListeningButton from './components/ListeningButton'
import ListeningText from './components/ListeningText'
import { TitleBar } from '../../components'
import { colors } from '../../styles/colors'

class Listening extends Component {
  public static options = {
    topBar: {
      visible: false,
    },
  }

  public render() {
    return (
      <Container>
        <TitleBar
          body={
            <Text
              style={{
                fontSize: 20,
                color: colors.brandPrimaryDeep,
                fontWeight: '700',
              }}
            >
              Listening
            </Text>
          }
        />
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
