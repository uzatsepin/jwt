import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const API_KEY = 'AIzaSyB_mtOBnKdoCOgEOJjeDsu0DF80jZ8az4w'

export const useAuthStore = defineStore('auth', () => {
    const userInfo = ref({
        token: '',
        email: '',
        userId: '',
        refreshToken: '',
        expiresIn: ''
    })
    const error = ref('')
    const loader = ref(false)
    const signup = async (payload) => {
        error.value = ''
        loader.value = true
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
                ...payload,
                returnSecurityTocken: true
            })
            userInfo.value = {
                token: response.data.idToken,
                email: response.data.email,
                userId: response.data.localId,
                refreshToken: response.data.refreshToken,
                expiresIn: response.data.expiresIn
            }
            loader.value = false
        } catch (err) {
            switch (err.response.data.error.message) {
                case 'EMAIL_EXISTS':
                    error.value = 'Email exists'
                    break
                case 'OPERATION_NOT_ALLOWED':
                    error.value = 'Operation not allowed'
                    break
                case 'USER_NOT_FOUND':
                    error.value = 'User not found'
                    break
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                    error.value = 'Too many attempts! Try again later'
                    break
                default:
                    error.value = 'Error'
                    break
            }
            loader.value = false
        }
    }
    return { signup, userInfo, error, loader }
})
