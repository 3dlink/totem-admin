import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AgentsComponent } from './agents/agents.component';
import { AddAgentsComponent } from './add-agents/add-agents.component';
import { EditAgentsComponent } from './edit-agents/edit-agents.component';
import { TotemsComponent } from './totems/totems.component';
import { AddTotemsComponent } from './add-totems/add-totems.component';
import { EditTotemsComponent } from './edit-totems/edit-totems.component';
import { EntityComponent } from './entity/entity.component';
import { AddEntityComponent } from './add-entity/add-entity.component';
import { EditEntityComponent } from './edit-entity/edit-entity.component';
import { AdminComponent } from './admin/admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { TotemSocketService } from './totem-socket.service';

const appRoutes:Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path: 'agents',
    component:AgentsComponent
  },
  {
    path: 'addAgents',
    component:AddAgentsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    DashboardComponent,
    PerfilComponent,
    AgentsComponent,
    AddAgentsComponent,
    EditAgentsComponent,
    TotemsComponent,
    AddTotemsComponent,
    EditTotemsComponent,
    EntityComponent,
    AddEntityComponent,
    EditEntityComponent,
    AdminComponent,
    AddAdminComponent,
    EditAdminComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [TotemSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
