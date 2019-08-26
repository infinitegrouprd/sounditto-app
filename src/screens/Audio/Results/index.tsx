import React from 'react';
import { Text, View, Icon } from 'native-base';
import TitleBar from '@components/title-bar/component';
import ButtonIcon from '@components/button-icon';
import { Image } from 'react-native';
import { Container, Content, Button } from 'native-base';
import { colors } from '@styles/colors';
import SocialBar from './components/SocialBar';
import isEmpyt from 'lodash/isEmpty';

const Results = ({ result }) => {
  const setButtonProps = (type: string) => {
    return {
      transparent: true,
      icon: true,
      [type]: true,
    };
  };
  return (
    <Container>
      <TitleBar
        left={
          <ButtonIcon
            name="arrow-back"
            type="MaterialIcons"
            buttonProps={setButtonProps('light')}
          />
        }
        body={<Text>Results</Text>}
      />
      <Content padder>
        {isEmpyt(result) ? (
          <View>
            <View>
              <Text>Audio no encontrado</Text>
            </View>
            <View>
              <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: 'https://via.placeholder.com/750X500.png' }}
              />
            </View>
            <View>
              <Button>
                <Text>Cancel</Text>
              </Button>
              <Button>
                <Text>Intente de Nuevo</Text>
              </Button>
            </View>
          </View>
        ) : (
          <>
            <Image
              source={{ uri: 'https://via.placeholder.com/750X500.png' }}
              style={{
                height: 200,
                width: '100%',
                borderBottomWidth: 0.5,
                borderColor: colors.blackTrans,
              }}
            />
            <View>
              <Text>kur spa</Text>
              <Text>
                Relajate en nuestro tranquilo lounge o simplemente disfruta de
                un refrigerio en el solarium.
              </Text>
            </View>
            <SocialBar />
          </>
        )}
      </Content>
    </Container>
  );
};

export default Results;
