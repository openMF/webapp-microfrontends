/** Angular Imports */
import { NgModule } from '@angular/core';

/** Custom Modules */
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MifosxLibModule } from '@mifosx-lib/mifosx-lib.module';
import { DirectivesModule } from '@mifosx-lib/directives/directives.module';
import { TemplatesRoutingModule } from './templates-routing.module';
import { TranslateModule } from '@ngx-translate/core';

/** Custom Components */
import { TemplatesComponent } from './templates.component';
import { ViewTemplateComponent } from './view-template/view-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { CreateTemplateComponent } from './create-template/create-template.component';

/**
 * Templates Module
 *
 * Templates components should be declared here.
 */
@NgModule({
  imports: [
    CKEditorModule,
    MifosxLibModule,
    DirectivesModule,
    TemplatesRoutingModule,
    TranslateModule
  ],
  declarations: [
    TemplatesComponent,
    ViewTemplateComponent,
    EditTemplateComponent,
    CreateTemplateComponent,
  ]
})
export class TemplatesModule { }
