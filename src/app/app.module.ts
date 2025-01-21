import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {TasksComponent} from "./tasks/tasks.component";
import {BrowserModule} from "@angular/platform-browser";
import {TasksModule} from "./tasks/tasks.module";
import {HeaderModule} from "./header/header.module";
import {UserModule} from "./user/user.module";
import {CardModule} from "./shared/card/card.module";

@NgModule({
  // 함께 동작해야하는 모든 컴포넌트들을 선언하고 등록하는 옵션
  // non-standalone component만 declarations에 등록할 수 있음(모듈과 독립형 컴포넌트는 경쟁하는 개념임)
  declarations: [AppComponent],
  // 어떤 컴포넌트가 애플리케이션을 시작하고자 하는 루트 컴포넌트인지 지정(Angular에게 알림)
  bootstrap: [AppComponent],
  // 독립형 컴포넌트들을 imports 배열에 등록할 수도 있음(따라서 비독립형 컴포넌트와 독립형 컴포넌트 혼합하여 사용 가능)
  // 모듈은 다른 모듈을 imports 할 수도 있음
  // 독립형 컴포넌트에도 모듈 추가 가능(new-task component 에서 그렇게 하고있음)
  imports: [TasksModule, HeaderModule, UserModule, CardModule, BrowserModule],
})
export class AppModule { // 모듈은 컴포넌트들을 그룹화 하기 위해 설정하는 것
}
