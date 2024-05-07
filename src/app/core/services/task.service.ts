import { Injectable } from '@angular/core';
import { Task, TaskPriority, TaskStatus } from '../models/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [{
    id: 1, deadline: '07/05/2024', title: "codar projeto da bolsa",
    description: "codar bem direitinho", status: TaskStatus.andamento, responsable: 'Iago Macedo',
    priority: TaskPriority.alta
  },
  {
    id: 2, deadline: '03/05/2024', title: "codar projeto da facul",
    description: "codar bem direitinho", status: TaskStatus.andamento, responsable: 'Iago Macedo',
    priority: TaskPriority.media
  },
  {
    id: 3, deadline: '08/05/2024', title: "codar projeto do trab",
    description: "codar bem direitinho", status: TaskStatus.andamento, responsable: 'Iago Macedo',
    priority: TaskPriority.baixa
  }



  ]

  constructor() { }

  getAllTasks() {
    return this.tasks;
  }
}
