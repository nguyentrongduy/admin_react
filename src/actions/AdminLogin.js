import { ActionTypes } from '../constants/ActionTypes';

export function ToggleButtonLoginAdmin() {
    return {
        type: ActionTypes.ADMIN_LOGGING_IN
    }
}

export function CheckLoginAdmin(username, password) {
    return {
        type: ActionTypes.ADMIN_CHECK_LOGIN,
        username,
        password
    }
}

export function LogoutAdmin() {
    return {
        type: ActionTypes.ADMIN_LOGOUT
    }
}

export function ForgotPasswordAdmin(email) {
    return {
        type: ActionTypes.ADMIN_FORGOT_PASSWORD,
        email
    }
}