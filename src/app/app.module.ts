import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Class1Component } from './class1/class1.component';
import { Class2Component } from './class2/class2.component';
import { Class3Component } from './class3/class3.component';
import { Class4Component } from './class4/class4.component';
import { Class5Component } from './class5/class5.component';
import { Class6Component } from './class6/class6.component';
import { Class7Component } from './class7/class7.component';
import { Class8Component } from './class8/class8.component';
import { Class9Component } from './class9/class9.component';
import { Class10Component } from './class10/class10.component';
import { Class11Component } from './class11/class11.component';
import { Class12Component } from './class12/class12.component';
import { ChildComponent } from './class12/child/child.component';
import { Class13Component } from './class13/class13.component';
import { Class14Component } from './class14/class14.component';
import { StudentListComponent } from './class14/student-list/student-list.component';
import { StudentDetailsComponent } from './class14/student-details/student-details.component';
import { StudentService } from './class14/student.service';
import { AgePipe } from './class13/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Class1Component,
    Class2Component,
    Class3Component,
    Class4Component,
    Class5Component,
    Class6Component,
    Class7Component,
    Class8Component,
    Class9Component,
    Class10Component,
    Class11Component,
    Class12Component,
    ChildComponent,
    Class13Component,
    Class14Component,
    StudentListComponent,
    StudentDetailsComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
