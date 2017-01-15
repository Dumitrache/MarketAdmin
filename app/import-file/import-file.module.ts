// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ImportFileComponent } from './import-file.component';
import { ImportFileService } from './import-file.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        SimpleNotificationsModule
    ],
    declarations: [
        ImportFileComponent,
    ],
    exports: [
        ImportFileComponent,
    ],
    providers:[ImportFileService]
})
export class ImportFileModule {

}
