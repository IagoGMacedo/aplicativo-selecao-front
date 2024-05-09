export interface IResponse<T>{
    data: T;
    message: string;
}

export interface ITask{
    id?: number;
    titulo: string;
    descricao: string;
    situacao: string;
    deadLine: string;
    prioridade: string
    usuario: string;
    nome_usuario: string;
}

export const situacoes: string[] = ['ANDAMENTO', 'CONCLUIDA'];

export const prioridades: string[] = ['ALTA', 'MEDIA', 'BAIXA'];


/* 
export enum TaskStatus {
    andamento = 'EM ANDAMENTO',
    concluida = 'CONCLUÍDA',
}

export enum TaskPriority {
    alta = 'ALTA',
    media = 'MEDIA',
    baixa = 'BAIXA',
}

*/