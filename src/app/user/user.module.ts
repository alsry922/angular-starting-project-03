import {NgModule} from "@angular/core";
import {UserComponent} from "./user.component";
import {CardComponent} from "../shared/card/card.component";
import {CardModule} from "../shared/card/card.module";

@NgModule({
  declarations: [UserComponent, CardComponent],
})
export class UserModule {

}
