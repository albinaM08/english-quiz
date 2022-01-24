import axios from 'axios'

export default class TestService {
    static async getByThemeAndLevel(theme, level) {
        const response = await axios.get('http://localhost:3000/tests', {
            params: {
                theme: theme,
                level: level
            }
        })
        return response;
    }
}