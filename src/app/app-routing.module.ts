import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  ExtraOptions
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

const config: ExtraOptions = {
  useHash: true,
  scrollPositionRestoration: 'enabled',
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
