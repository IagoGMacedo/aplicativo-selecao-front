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

  getAllTasks(data: ITask): Observable<ITask[]> {
    let queryString = this.buildQueryString(data);
    return this.http.get<ITask[]>(`${apiEndpoint.TaskEndpoint.tasks}?${queryString}`);
  }

  addTask(data: ITask): Observable<ITask> {
    return this.http.post<ITask>(`${apiEndpoint.TaskEndpoint.tasks}`, data);
  }

  updateTask(id: number, data: ITask): Observable<ITask> {
    return this.http.patch<ITask>(`${apiEndpoint.TaskEndpoint.tasks}/${id}`, data);
  }

  deleteTask(id: number){
    return this.http.delete(`${apiEndpoint.TaskEndpoint.tasks}/${id}`);
  }
  
  //outros endpoints vem aqui

  //updateUsuario
  buildQueryString(data: ITask){
    let queryString = '';
    for (const [key, value] of Object.entries(data)) {
      if (value !== undefined &&  value !== null && value !== '' && value !== 0) {
        queryString += `${key}=${encodeURIComponent(value)}&`;
      }
    }
    queryString = queryString.slice(0, -1);
    return queryString;
  }
  
}


