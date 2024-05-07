export interface Task{
    id?: number;
    title: string;
    description: string;
    status: TaskStatus;
    deadline: string;
    priority: TaskPriority
    responsable: string;
}

export enum TaskStatus {
    andamento = 'EM ANDAMENTO',
    concluida = 'CONCLUÍDA',
}

export enum TaskPriority {
    alta = 'ALTA',
    media = 'MEDIA',
    baixa = 'BAIXA',
}