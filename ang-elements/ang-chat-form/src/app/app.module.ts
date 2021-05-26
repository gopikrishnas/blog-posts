import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';

import { ChatFormComponent } from './chat-form/chat-form.component';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    ChatFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [ChatFormComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(ChatFormComponent, { injector });
    customElements.define('app-chat-form', customElement);
  }

  ngDoBootstrap() {

  }
} 
