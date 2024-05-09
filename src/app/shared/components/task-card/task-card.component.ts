import { Component, Input } from '@angular/core';
import { ITask, situacoes } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() status: string = situacoes[0];
  @Input() task!: ITask;
  @Input() nome!: string;
  @Input() id!: string;
}
