import React, { Component } from 'src/screens/Profile/node_modules/react';
import { View, Platform, TouchableOpacity, BackHandler } from 'react-native';

import {
  Button,
  Text,
  Icon,
  Label,
  Item,
  Input,
  Content,
  Container,
  Spinner,
  Root,
  Toast,
  Thumbnail,
} from 'native-base';

import { colors } from 'src/screens/Profile/node_modules/src/screens/Audio/History/node_modules/@styles/colors';
import { changeActiveScreen } from '../../modules/Session';
import { connect } from 'src/screens/Profile/node_modules/react-redux';
const axios = require('../../../src/config/axios');
import { API_KEY } from 'src/screens/Profile/node_modules/react-native-dotenv';

import TitleBar from '../../components/title-bar';

const platform = Platform.OS;

import { Navigation } from 'src/screens/Profile/node_modules/react-native-navigation';

import StyleSheet from './Details/stylesheet';
import { DASHBOARD, SIDEMENU, EDIT_PROFILE } from '..';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: [],
      families: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getUserInfo();
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }

  backAndroid() {
    this.props.changeActiveScreen({ activeScreen: DASHBOARD });
    return true;
  }

  capitalizeFilter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  showDrawer = () => {
    Navigation.mergeOptions(SIDEMENU, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  };

  goToEditProfileScreen() {
    Navigation.push(this.props.componentId, {
      component: {
        name: EDIT_PROFILE,
        passProps: {
          userInfo: this.state.userInfo,
          userFamilies: this.state.families,
        },
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    });
  }

  getFamilies = () => {
    axios
      .get(`/companies?q=(users_id:${this.props.user.id})`)
      .then(response => {
        this.setState({ families: response.data, isLoading: false }, () => {
          if (this.props.profileInfoChanged) {
            Toast.show({
              text: 'Profile successfully updated!',
              buttonText: 'Ok',
              duration: 3000,
              type: 'success',
            });
          }
        });
      })
      .catch(function(error) {
        this.setState({ isLoading: false });
        console.log(error);
      });
  };

  getDefaultFamilyName() {
    let defaultFamily = this.state.families.find(family => {
      return family.id == this.state.userInfo.default_company;
    });
    return defaultFamily ? defaultFamily.name : 'No Disponible';
  }

  getUserInfo() {
    const data = {
      Authorization: this.props.token,
    };
    axios
      .get(`/users/${this.props.user.id}`)
      .then(response => {
        this.setState({ userInfo: response.data });
        this.getFamilies();
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  titleBarLeft() {
    return {
      content: (
        <View style={StyleSheet.titleBarContent}>
          <Button transparent onPress={() => this.showDrawer()}>
            <Icon
              type={'MaterialIcons'}
              name={'menu'}
              style={{ color: '#fff', fontSize: 22 }}
            />
          </Button>
        </View>
      ),
    };
  }

  titleBarRight() {
    return {
      content: (
        <View style={[StyleSheet.titleBarContent, { minHeight: 45 }]}>
          <TouchableOpacity
            onPress={() => {
              this.goToEditProfileScreen();
            }}
          >
            <Text style={{ color: '#fff', paddingLeft: 0, fontSize: 16 }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>
      ),
    };
  }

  openAddCardModal() {
    this.props.navigator.push({
      screen: EDIT_PROFILE,
      passProps: {
        cardCreationAction: this.getUserCards,
      },
      navigatorStyle: {
        navBarHidden: true,
        tabBarHidden: true,
      },
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Container>
          <Root>
            <TitleBar left={this.titleBarLeft()} body={titleBarbody} />
            <Content>
              <View style={{ margin: 'auto' }}>
                <Spinner />
              </View>
            </Content>
          </Root>
        </Container>
      );
    } else {
      return (
        <Container>
          <Root>
            <TitleBar
              left={this.titleBarLeft()}
              body={titleBarbody}
              right={this.titleBarRight()}
            />
            <Content padder>
              <View style={StyleSheet.positionR}>
                <View style={StyleSheet.container}>
                  <Thumbnail
                    source={{
                      uri:
                        'https://banner2.kisspng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg',
                    }}
                    style={{ width: 120, height: 120 }}
                    resizeMode="cover"
                  />
                </View>
                <Item stackedLabel style={StyleSheet.formItem}>
                  <Label
                    style={[
                      StyleSheet.formLabel,
                      { fontSize: 12, color: colors.brandBlack },
                    ]}
                  >
                    Name
                  </Label>
                  <Input
                    style={StyleSheet.formInput}
                    value={this.capitalizeFilter(this.state.userInfo.firstname)}
                    disabled
                  />
                </Item>
                <Item stackedLabel style={StyleSheet.formItem}>
                  <Label
                    style={[
                      StyleSheet.formLabel,
                      { fontSize: 12, color: colors.brandBlack },
                    ]}
                  >
                    Lastname
                  </Label>
                  <Input
                    style={StyleSheet.formInput}
                    value={this.capitalizeFilter(this.state.userInfo.lastname)}
                    disabled
                  />
                </Item>
                <Item stackedLabel style={StyleSheet.formItem}>
                  <Label
                    style={[
                      StyleSheet.formLabel,
                      { fontSize: 12, color: colors.brandBlack },
                    ]}
                  >
                    Email
                  </Label>
                  <Input
                    style={StyleSheet.formInput}
                    value={this.state.userInfo.email}
                    disabled
                  />
                </Item>
                <Item stackedLabel style={StyleSheet.formItem}>
                  <Label
                    style={[
                      StyleSheet.formLabel,
                      { fontSize: 12, color: colors.brandBlack },
                    ]}
                  >
                    Password
                  </Label>
                  <Input
                    style={StyleSheet.formInput}
                    value={this.state.userInfo.password}
                    secureTextEntry
                    disabled
                  />
                </Item>
                <Item stackedLabel style={StyleSheet.formItem}>
                  <Label
                    style={[
                      StyleSheet.formLabel,
                      { fontSize: 12, color: colors.brandBlack },
                    ]}
                  >
                    Default Company
                  </Label>
                  <Input
                    style={StyleSheet.formInput}
                    value={this.getDefaultFamilyName()}
                    disabled
                  />
                </Item>
              </View>
            </Content>
          </Root>
        </Container>
      );
    }
  }
}

const titleBarbody = {
  content: (
    <View style={StyleSheet.titleBarContent}>
      <Text
        style={{
          color: '#fff',
          paddingLeft: platform === 'ios' ? 0 : 10,
          fontSize: platform === 'ios' ? 18 : 19.64,
        }}
      >
        My Profile
      </Text>
    </View>
  ),
};

const mapStateToProps = state => {
  return {
    token: state.session.token,
    user: state.session.user,
    selectedCompanyId: state.session.selectedCompanyId,
    company: state.session.company,
  };
};

export default connect(
  mapStateToProps,
  {
    changeActiveScreen,
  }
)(Profile);
