import { notificationService } from "services/notificationService";
import { userService } from "services/user.service";


export const login = (username, password) => async dispatch => {
  try {
    const response = await userService.login(username, password)
    dispatch({ type: 'LOGIN', res: response })
    notificationService.notify('dark', `Welcome ${response.user.firstName} ${response.user.lastName}`)
  } catch (err) {
    notificationService.notify('error', 'coudlnt log in')
  }
};

export const updateUser = (newUser) => async dispatch => {
  try {
    const response = await userService.update(newUser)
    dispatch({ type: 'LOGIN', res: response })
    notificationService.notify('dark', `Your profile updated ,  ${response.user.firstName} ${response.user.lastName}`)
  } catch (err) {
    notificationService.notify('error', 'coudlnt update user')
    throw err
  }
};

export const logout = () => async (dispatch, getState) => {
  try {
    const response = await userService.logout(getState().userReducer.refreshToken)
    dispatch({ type: 'LOGOUT' })
    notificationService.notify('dark', 'You logout')
  } catch (err) {
    notificationService.notify('error', 'coudlnt log out')
    throw err
  }
};

// export const updateUser = (newUser)

export const signup = newUser => async dispatch => {
  try {
    const response = await userService.register(newUser)
    dispatch({ type: 'LOGIN', res: response })
    notificationService.notify('dark', `Welcome ,  ${response.user.firstName} ${response.user.lastName}`)
  } catch (err) {
    notificationService.notify('error', 'coudlnt signup')
    throw err
  }
};
