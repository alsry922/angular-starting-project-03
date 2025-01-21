import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

// bootstrapApplication(AppComponent).catch((err) => console.error(err)); // 루트 컴포넌트가 독립형 컴포넌트일 때만 동작함
platformBrowserDynamic().bootstrapModule(AppModule).then(r => console.error(r));
