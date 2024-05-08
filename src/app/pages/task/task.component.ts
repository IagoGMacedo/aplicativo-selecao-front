import { Component, OnInit } from '@angular/core';
import { TaskCardComponent } from '../../shared/components/task-card/task-card.component';
import { ITask, situacoes, prioridades } from '../../core/models/task.model';
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
  tasks: ITask[] = [];
  tarefaPrioridades = prioridades;
  tarefaSituacoes = situacoes;
  taskResponsables = ["1", "2", "3"];
  isSlidePanelOpen = false;
  taskId: number | null = null;
  filterByStatus = '';



  constructor(private taskService: TaskService, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      titulo: new FormControl('', [Validators.required]),
      descricao: new FormControl('', [Validators.required]),
      deadLine: new FormControl('', [Validators.required]),
      prioridade: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe({
      next: (response) => {
        console.log("cheguei pra armazenar");
        this.tasks = response;
        console.log("sai do armazenar");
      }

    })
    console.log("debugando tarefas");
    console.log(this.tasks);
  }

  openSlidePanel() {
    this.isSlidePanelOpen = true;
  }

  onCloseSlidePanel() {
    this.isSlidePanelOpen = false;
    this.closeModel();
  }

  onFilterByStatus(status: string) {
    this.filterByStatus = status;
    this.getAllTasks();
  }

  

  onSubmit() {
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
  }

  onLoadTaskForm(item: ITask) {
    this.taskId = item.id!!;
    this.taskForm.patchValue({
      titulo: item.titulo,
      descricao: item.descricao,
      deadLine: item.deadLine,
      prioridade: item.prioridade,
      usuario: item.usuario
    });
    this.openModel();
  }

  openModel(){
    const modelDiv = document.getElementById('exampleModal');
    if(modelDiv != null){
      modelDiv.style.display = 'block';
    }
  }

  closeModel(){
    const modelDiv = document.getElementById('exampleModal');
    if(modelDiv != null){
      modelDiv.style.display = 'none';
    }
  }

}
