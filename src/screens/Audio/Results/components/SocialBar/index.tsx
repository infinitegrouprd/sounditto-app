import React from 'react';
import styled from 'styled-components/native';
import ButtonIcon from '@components/button-icon';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

interface ISocialBar {
  socialUrl?: {
    facebook: string;
    twitter: string;
    instagram: string;
    share: string;
    whatsapp: string;
  };
  onPress: (social?: string) => any;
}
const SocialBar = ({ socialUrl, onPress }: ISocialBar) => {
  const setButtonProps = (type: string) => {
    return {
      transparent: true,
      icon: true,
      [type]: true,
    };
  };
  return (
    <Container>
      <ButtonIcon
        type="FontAwesome5"
        name="facebook-square"
        buttonProps={setButtonProps('primary')}
        onPress={onPress(socialUrl.facebook)}
      />
      <ButtonIcon
        type="FontAwesome5"
        name="twitter-square"
        buttonProps={setButtonProps('primary')}
        onPress={onPress(socialUrl.twitter)}
      />
      <ButtonIcon
        type="FontAwesome5"
        name="instagram"
        buttonProps={setButtonProps('light')}
        onPress={onPress(socialUrl.instagram)}
      />
      <ButtonIcon
        type="FontAwesome5"
        name="whatsapp-square"
        buttonProps={setButtonProps('success')}
        onPress={onPress(socialUrl.whatsapp)}
      />
      <ButtonIcon
        type="FontAwesome5"
        name="share-alt-square"
        buttonProps={setButtonProps('light')}
        onPress={onPress(socialUrl.share)}
      />
    </Container>
  );
};

export default SocialBar;
