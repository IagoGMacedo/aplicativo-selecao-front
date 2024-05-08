import { Injectable } from '@angular/core';
import { IResponse, ITask } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { apiEndpoint } from '../constants/constants';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${apiEndpoint.TaskEndpoint.getAllTasks}`);
  }

  addTask(data: ITask): Observable<ITask> {
    return this.http.post<ITask>(`${apiEndpoint.TaskEndpoint.addTask}`, data);
  }

  updateTask(id: number, data: ITask): Observable<ITask> {
    return this.http.patch<ITask>(`${apiEndpoint.TaskEndpoint.addTask}/${id}`, data);
  }
  
  //outros endpoints vem aqui

  //updateUsuario

  
}
