import ConnectyCube from 'react-native-connectycube'
import appConfig from '../../connectycube-config.json'
import AsyncStorage from '@react-native-async-storage/async-storage'
import User from '../models/user'
import store from '../store'
import { LogOut } from '../reducers/index'
import { setCurrentUser, updateCurrentUser} from '../actions/currentUser'
import { getImageLinkFromUID,preparationUploadImg } from '../helpers/file'

class AuthService {
  static CURRENT_USER_SESSION_KEY = 'CURRENT_USER_SESSION_KEY'
  static DEVICE_SUBSCRIPTION_ID = 'DEVICE_SUBSCRIPTION_ID'

  async init() {
    await ConnectyCube.init(...appConfig.connectyCubeConfig)
    return this.autologin()
  }
  
  async autologin() {
     const checkUserSessionFromStore = await this.getUserSession()
     if (checkUserSessionFromStore) {
       const data = JSON.parse(checkUserSessionFromStore)
       await this.signIn({ login: data.login, password: data.password })
       return 'Dialogs'
     } else { return 'Auth' }
   }

  async signIn(params) {
    const session = await ConnectyCube.createSession(params)
    const currentUser = new User(session.user);
    session.user.avatar = getImageLinkFromUID(session.user.avatar)
    store.dispatch(setCurrentUser(session))
    const customSession = Object.assign({}, currentUser, { password: params.password })
    this.setUserSession(customSession)
    this.connect(customSession.id, customSession.password)
  }

  async updateCurrentUser({ image}) {
    const updateData = {}

    if (image) {
      const file = preparationUploadImg(image)
      const resultUploadImg = await ConnectyCube.storage.createAndUpload({ file })
      updateData.avatar = resultUploadImg.uid
    }
    const responseUpdateUser = await ConnectyCube.users.update(updateData)
    const prewSession = await this.getUserSession()
    responseUpdateUser.user.avatar = getImageLinkFromUID(responseUpdateUser.user.avatar)
    const newSession = Object.assign(JSON.parse(prewSession), responseUpdateUser.user)
    await this.setUserSession(newSession)
    store.dispatch(updateCurrentUser(responseUpdateUser.user))
  }




  // async signUp(params) {
  //   await ConnectyCube.createSession()
  //   await ConnectyCube.users.signup(params)
  //   return this.signIn(params)
  // }

  async setUserSession(userSession) {
    return AsyncStorage.setItem(AuthService.CURRENT_USER_SESSION_KEY, JSON.stringify(userSession))
  }

  async getUserSession() {
    return await AsyncStorage.getItem(AuthService.CURRENT_USER_SESSION_KEY)
  }

  // async unsubscribePushNotifications() {
  //   const subscriptionIdToDelete = await this.getStoreDeviceSubscriptionId()
  //   ConnectyCube.pushnotifications.subscriptions.delete(subscriptionIdToDelete);
  // }

  async getStoreDeviceSubscriptionId() {
    return await AsyncStorage.getItem(AuthService.DEVICE_SUBSCRIPTION_ID)
  }

  async logout() {
    await AsyncStorage.clear()
    await ConnectyCube.logout()
    store.dispatch(LogOut())
  }

  async connect(userId, password) {
    await ConnectyCube.chat.connect({ userId, password })
  }

  get currentUser() {
    return store.getState().currentUser
  }
}

const authService = new AuthService()

Object.freeze(authService)

export default authService