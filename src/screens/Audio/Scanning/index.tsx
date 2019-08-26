import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Container, Content } from 'native-base';
import { TitleBar } from 'src/components';
import ButtonIcon from 'src/components/button-icon';
import { AudioImage } from './components/AudioImage';
import { images } from 'src/styles/imagesUris';
import isEmpty = require('lodash/isEmpty');
import NotResults from './components/NotResults';

const Scanning = () => {
  const [haveResults, setHaveResults] = useState({});
  return (
    <Container>
      <TitleBar
        left={
          <ButtonIcon name="close" type="MaterialIcons" onPress={() => {}} />
        }
      />
      <Content
        padder
        contentContainerStyle={{
          justifyContent: 'center',
          flex: 1,
          flexDirection: 'column',
          alingItems: 'center',
        }}
      >
        {isEmpty(haveResults) ? (
          <NotResults />
        ) : (
          <AudioImage source={images.logo.uri} />
        )}
      </Content>
    </Container>
  );
};

export default Scanning;
