import React from 'src/screens/Audio/History/components/node_modules/react'
import { Card, CardItem, Text } from 'native-base'
import { Image, View } from 'react-native'

export interface IAudioCard {
  id: number
  mediaSource?: string
  title: string
}
const AudioCard = ({ mediaSource, title }: IAudioCard) => {
  return (
    <Card>
      <CardItem cardBody style={{ justifyContent: 'center' }}>
        <Image
          source={{ uri: mediaSource }}
          style={{ height: 150, width: 150 }}
        />
      </CardItem>
      <CardItem>
        <Text>{title}</Text>
      </CardItem>
    </Card>
  )
}

AudioCard.defaultProps = {
  mediaSource: 'https://via.placeholder.com/150.png',
  title: 'Placeholder Example',
}

export default AudioCard
