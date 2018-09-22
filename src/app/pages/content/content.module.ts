import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentManagerComponent } from './content-manager/content-manager.component';
import { ContentRegisterComponent } from './content-register/content-register.component';
import { ContentComponent } from './content/content.component';
import { routedComponents, ContentRoutingModule } from './content-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    ContentRoutingModule
  ],
  declarations: [
    ContentManagerComponent, 
    ContentRegisterComponent, 
    ContentComponent,
    ...routedComponents
  ]
})
export class ContentModule { }
