import { Component, OnInit } from '@angular/core';
import { TaskCardComponent } from '../../shared/components/task-card/task-card.component';
import { ITask, situacoes, prioridades } from '../../core/models/task.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../core/services/task.service';
import { IUserValue } from '../../core/models/user.model';
import { UserService } from '../../core/services/usuario.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskCardComponent, ReactiveFormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent implements OnInit {
  taskForm!: FormGroup;
  filterForm!: FormGroup;
  tasks: ITask[] = [];
  usersValue: IUserValue[] = [];
  tarefaPrioridades = prioridades;
  tarefaSituacoes = situacoes;
  taskResponsables = ["1", "2", "3"];
  taskId: number | null = null;
  filterByStatus = '';



  constructor(private taskService: TaskService, private userService: UserService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      titulo: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      deadLine: new FormControl('', [Validators.required]),
      prioridade: new FormControl('', [Validators.required]),
      situacao: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
    });

    this.filterForm = this.fb.group({
      id: new FormControl(),
      titulo: new FormControl(),
      deadLine: new FormControl(),
      prioridade: new FormControl(),
      situacao: new FormControl(),
      usuario: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.filterForm.get('situacao')?.setValue('ANDAMENTO');
    this.getAllTasks();
    this.getAllUserValues();
  }

  getAllUserValues() {
    this.userService.getAllUserValue().subscribe({
      next: (response) => {
        this.usersValue = response;
      }
    })
    this.usersValue.push({id: 0, nome: ''});
    console.log("debugando");
    console.log(this.usersValue);
  }

  getAllTasks() {
    this.taskService.getAllTasks(this.filterForm.value).subscribe({
      next: (response) => {
        this.tasks = response;
      }
    })
  }


  onsubmitFilter() {
    this.getAllTasks();
    this.closeModel('filterModal');
  }


  onSubmit() {
    if (this.taskForm.valid) {
      if (this.taskId) {
        this.taskService
          .updateTask(this.taskId, this.taskForm.value)
          .subscribe({
            next: (response) => {
              this.getAllTasks();
              this.closeModel('taskModal');
            },
          });
      } else {
        this.taskService.addTask(this.taskForm.value).subscribe({
          next: (response) => {
            this.getAllTasks();
            this.closeModel('taskModal');
          },
        });
      }
    } else {
      this.taskForm.markAllAsTouched();
    }
    this.taskForm.reset();
  }

  onDelete() {
    if (this.taskId) {
      this.taskService
        .deleteTask(this.taskId)
        .subscribe({
          next: (response) => {
            this.getAllTasks();
            this.closeModel('taskModal');
          },
        });
    }
  }

  onLoadTaskForm(item: ITask) {
    this.taskId = item.id!!;
    this.taskForm.patchValue({
      titulo: item.titulo,
      descricao: item.descricao,
      deadLine: item.deadLine,
      prioridade: item.prioridade,
      situacao: item.situacao,
      usuario: item.usuario
    });
    this.openModel('taskModal');
  }

  onLoadFilterForm(item: ITask) {
    this.taskForm.patchValue({
      id: item.id,
      titulo: item.titulo,
      deadLine: item.deadLine,
      prioridade: item.prioridade,
      situacao: item.situacao,
      usuario: item.usuario
    });
    this.openModel('filterModal');
  }

  openModel(id: string) {
    const modelDiv = document.getElementById(id);
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  closeModel(id: string) {
    const modelDiv = document.getElementById(id);
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
      this.taskId = null;
      if (id == 'taskModal')
        this.taskForm.reset();
    }
  }

}
