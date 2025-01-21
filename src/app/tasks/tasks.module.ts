import {NgModule} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {TasksComponent} from "./tasks.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {CardModule} from "../shared/card/card.module";
import {FormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {CardComponent} from "../shared/card/card.component";

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent, CardComponent],
  imports: [FormsModule, DatePipe],
  exports: [TasksComponent, TaskComponent, NewTaskComponent],
})
export class TasksModule {
}
