import { Component, Input } from '@angular/core';
import { Task, TaskStatus } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() status: TaskStatus = TaskStatus.andamento;
  @Input() task!: Task;
}
