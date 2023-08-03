import {ref} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY_FIREBASE

export const useAuthStore = defineStore('auth', () => {
    const userInfo = ref({
        token: '',
        email: '',
        userId: '',
        refreshToken: '',
        expiresIn: ''
    })
    const error = ref({
        text: '',
        id: '',
        severity: ''
    })
    const successAuth = ref('')
    const loader = ref(false)

    const auth = async (payload, type) => {
        const stringUrl = type === 'signup' ? 'signUp' : 'signInWithPassword';
        error.value.text = ''
        error.value.id = ''
        ;(successAuth.value = ''), (loader.value = true)
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:${stringUrl}?key=${API_KEY}`, {
                ...payload,
                returnSecureToken: true
            })
            userInfo.value = {
                token: response.data.idToken,
                email: response.data.email,
                userId: response.data.localId,
                refreshToken: response.data.refreshToken,
                expiresIn: response.data.expiresIn
            }
            localStorage.setItem('userTokens', JSON.stringify({
                token: userInfo.value.token,
                refreshToken: userInfo.value.refreshToken,
                expiresIn: userInfo.value.expiresIn
            }))
            loader.value = false
            if (response.status === 200) {
                successAuth.value = 'Registered Success'
            }
        } catch (err) {
            switch (err.response.data.error.message) {
                case 'EMAIL_EXISTS':
                    ;(error.value.text = 'Email exists'), (error.value.id = '1'), (error.value.severity = 'error')
                    break
                case 'OPERATION_NOT_ALLOWED':
                    ;(error.value.text = 'Operation not allowed'), (error.value.id = '2'), (error.value.severity = 'error')
                    break
                case 'USER_NOT_FOUND':
                    ;(error.value.text = 'User not found'), (error.value.id = '3'), (error.value.severity = 'error')
                    break
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                    ;(error.value.text = 'Too many attempts! Try again later'), (error.value.id = '4'), (error.value.severity = 'warn')
                    break
                case 'ADMIN_ONLY_OPERATION':
                    ;(error.value.text = 'Admin only operation or did not enter, anything'), (error.value.id = '5'), (error.value.severity = 'warn')
                    break
                case 'EMAIL_NOT_FOUND':
                    ;(error.value.text = 'Email not found'), (error.value.id = '8'), (error.value.severity = 'error')
                    break
                case 'INVALID_PASSWORD':
                    ;(error.value.text = 'Invalid password'), (error.value.id = '9'), (error.value.severity = 'error')
                    break
                case 'MISSING_EMAIL':
                    ;(error.value.text = 'Missing email'), (error.value.id = '10'), (error.value.severity = 'warn')
                    break
                default:
                    ;(error.value.text = 'Something wrong'), (error.value.id = '6'), (error.value.severity = 'error')
                    break
            }
            throw error.value
        } finally {
            loader.value = false
        }
    }
    return {auth, userInfo, error, loader, successAuth}
})
