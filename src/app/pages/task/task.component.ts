import { Component, OnInit } from '@angular/core';
import { TaskCardComponent } from '../../shared/components/task-card/task-card.component';
import { Task, TaskStatus } from '../../core/models/task.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SlidePanelComponent } from '../../shared/ui/slide-panel/slide-panel.component';
import { TaskService } from '../../core/services/task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskCardComponent, SlidePanelComponent, ReactiveFormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {
  taskForm!: FormGroup;
  tasks: Task[] = [];
  taskStatus = ["EM ANDAMENTO", "CONCLUÍDA"];
  taskPriorities = ["BAIXO","MÉDIA", "ALTA"];
  taskResponsables = ["IAGO", "GABRIEL", "NOBRE"];
  isSlidePanelOpen = false;
  taskId: number | null = null;
  filterByStatus = '';



  constructor(private taskService: TaskService, private fb: FormBuilder){
    this.taskForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('OPEN', [Validators.required]),
      deadline: new FormControl('OPEN', [Validators.required]),
      priority: new FormControl('OPEN', [Validators.required]),
      responsable: new FormControl('OPEN', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(){
    this.tasks = this.taskService.getAllTasks();
  }

  openSlidePanel() {
    this.isSlidePanelOpen = true;
  }

  onCloseSlidePanel() {
    this.isSlidePanelOpen = false;
  }

  onFilterByStatus(status: string) {
    this.filterByStatus = status;
    this.getAllTasks();
  }

  onSubmit() {
    /* 
    if (this.taskForm.valid) {
      if (this.taskId) {
        this.taskService
          .updateTask(this.taskId, this.taskForm.value)
          .subscribe({
            next: (response) => {
              this.getAllTasks();
              this.onCloseSlidePanel();
            },
          });
      } else {
        this.taskService.addTask(this.taskForm.value).subscribe({
          next: (response) => {
            this.getAllTasks();
            this.onCloseSlidePanel();
          },
        });
      }
    } else {
      this.taskForm.markAllAsTouched();
    }
    */
  }

  
}
