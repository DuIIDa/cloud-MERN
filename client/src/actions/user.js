import axios from 'axios'

//Указываем куда будет отправляться запрос и что должны получить
export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            email,
            password
        })
        alert(response.data.message)
    } catch (error) {
        console.log('error: ', error);
        alert(error.response.data.message)
    }
}