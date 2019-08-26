import React from 'react';
import { Button, Icon } from 'native-base';

interface IButton {
  name: string;
  type:
    | 'AntDesign'
    | 'Entypo'
    | 'EvilIcons'
    | 'Feather'
    | 'FontAwesome'
    | 'FontAwesome5'
    | 'Foundation'
    | 'Ionicons'
    | 'MaterialCommunityIcons'
    | 'MaterialIcons'
    | 'Octicons'
    | 'SimpleLineIcons'
    | 'Zocial'
    | undefined;
  buttonProps?: any;
  onPress: () => any;
}
const ButtonIcon = ({ name, type, buttonProps, onPress }: IButton) => {
  return (
    <Button {...buttonProps} onPress={onPress}>
      <Icon name={name} type={type} />
    </Button>
  );
};

export default ButtonIcon;
