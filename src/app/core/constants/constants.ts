export const constants = {
    CURRENT_TOKEN: 'CURRENT_TOKEN',
};

const apiUrl = 'http://localhost:8080/api';

export const apiEndpoint = {
    AuthEndpoint: {
        login: '${apiUrl}/login',
        register: '${apiUrl}/register',
        logout: '${apiUrl}/logout'
    },
    TaskEndpoint: {
        addTask: '${apiUrl}/tarefa',
        getTasks: '${apiUrl}/tarefa',
    }

};  