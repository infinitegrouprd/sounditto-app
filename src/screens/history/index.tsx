import React from 'react'
import { View, FlatList } from 'react-native'
import { Text, Container, Content, Card } from 'native-base'
import { TitleBar } from '@components'
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
  public static options = {
    topBar: {
      visible: false,
    },
  }
  public renderItem = (audio: IAudioCard) => {
    return <AudioCard {...audio} />
  }

  public keyExtractor = (audio: IAudioCard) => audio.id
  public render() {
    return (
      <Container>
        <TitleBar
          body={
            <Text
              style={{
                fontSize: 20,
                color: colors.brandPrimaryDeep,
                fontWeight: '600',
              }}
            >
              History Audio
            </Text>
          }
        />
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
