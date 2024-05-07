import { Routes } from '@angular/router';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { TaskComponent } from './pages/task/task.component';

export const routes: Routes = [
    {
        path: '',
        component: DefaultComponent,
        children: [{ path: '', component: LoginComponent }],
      },
      {
        path: '',
        component: MasterComponent,
        children: [{ path: 'task', component: TaskComponent }],
      },
];
