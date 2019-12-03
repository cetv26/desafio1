import { RouterModule, Routes } from '@angular/router';

import {AddClientComponent} from "./add-client/add-client.component";
import {ListClientComponent} from "./list-client/list-client.component";
import {KpiComponent} from "./kpi/kpi.component";
const routes: Routes = [

  { path: 'add-client', component: AddClientComponent },
  { path: 'list-client', component: ListClientComponent },
  { path: 'kpi', component: KpiComponent },
  {path : '', component : ListClientComponent}
];

export const routing = RouterModule.forRoot(routes);