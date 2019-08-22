import Permissions, { ReactNativePermissions } from 'react-native-permissions';
import { types } from '@babel/core';
import { Alert } from 'react-native';

interface props {
  permission: ReactNativePermissions,
}

enum TypePermission {
  MICROPHONE = 'microphone',
  LOCATION = 'location',
  PHOTOS = 'phots',
  CONTACTS = 'contacts',
}

enum PermissionResponse {
  AUTHORIZED = 'authorized',
  DENIED = 'denied',
  RESTRICTED = 'restricted',
  UNDETERMINED = 'undetermined'
}

class permission implements props {
  permission = Permissions;
  async checkPermission(scope : string = TypePermission.MICROPHONE ) {
    try {
      const result = await this.permission.check(scope)
      if (PermissionResponse.AUTHORIZED != result) {

      }
    } catch (error) {
      throw new Error("Device don't have any permission" )
    }
  }

  async requestPermission(scope : string = TypePermission.MICROPHONE, title: string, message: string) {
    try {
        Alert.alert(
          title,
          message,
          [
            { text: 'cancel', style:'cancel' },
            { text: 'Settings', style: 'default', onPress:() => this.openSettings() }
          ],
          { cancelable: false }
        )
    } catch (error) {
      throw new Error("Device don't have any permission" )

    }
  }

  async openSettings() {
    try {
      const canOpen = await this.permission.canOpenSettings();
      if (canOpen) {
        await this.permission.openSettings();
      }
    } catch (error) {
      throw new Error("Device don't have any permission" )

    }
  }
}

export default new permission();