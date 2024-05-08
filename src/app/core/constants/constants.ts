export const constants = {
    CURRENT_TOKEN: 'CURRENT_TOKEN',
};

const rootUrl = 'http://localhost:8080';
const apiUrl = 'http://localhost:8080/api';


export const apiEndpoint = {
    AuthEndpoint: {
        login: `${rootUrl}/login`,
        register: `${rootUrl}/register`,
        logout: `${rootUrl}/logout`
    },
    TaskEndpoint: {
        getAllTasks: `${apiUrl}/tarefas`,
        addTask: `${apiUrl}/tarefas`,
    }

};  