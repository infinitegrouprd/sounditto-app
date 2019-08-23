import React from 'react'
import { View, FlatList } from 'react-native'
import { Text, Container, Content, Card } from 'native-base'
import TitleBar from '@components/title-bar'
import { colors } from '@styles/colors'
import AudioCard, { IAudioCard } from './components/AudioCard'

const audios = [
  { id: 1, title: 'prueba1' },
  { id: 2, title: 'prueba2' },
  { id: 3, title: 'prueba3' },
  { id: 4, title: 'prueba4' },
  { id: 5, title: 'prueba3' },
  { id: 6, title: 'prueba4' },
  { id: 7, title: 'prueba3' },
  { id: 8, title: 'prueba4' },
]

class History extends React.Component {
  static options = {
    topBar: {
      visible: false,
    },
  }
  renderItem = (audio: IAudioCard) => {
    return <AudioCard {...audio} />
  }

  renderBody() {
    return (
      <Text
        style={{
          fontSize: 20,
          color: colors.brandPrimaryDeep,
          fontWeight: '600',
        }}
        >
      History Audio
    </Text>
    )
  }

  keyExtractor = (audio: IAudioCard) => audio.id
  render() {
    return (
      <Container>
        <TitleBar body={this.renderBody()} />
        <Content
          style={{ backgroundColor: colors.brandSecondary }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <FlatList
            numColumns={2}
            keyExtractor={this.keyExtractor}
            data={audios}
            renderItem={this.renderItem}
          />
        </Content>
      </Container>
    )
  }
}

export default History
