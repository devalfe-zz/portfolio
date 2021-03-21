import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';

const DATA_SERVICES = [];

export const DATA_PROVIDERS = [
  ...ServicesModule.forRoot().providers,
  ...DATA_SERVICES
];
@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [...DATA_PROVIDERS]
    };
  }
}
