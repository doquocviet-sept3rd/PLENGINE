import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tab } from './core/domain/model/tab';
import { NgForOf, NgIf } from '@angular/common';
import { SanitizerPipe } from './shared/pipe/sanitizer.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, SanitizerPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  tabs: Tab[] = [];

  constructor() {
    this.tabs.push(...[{
      title: 'Youtube',
      url: 'https://www.youtube.com/watch?v=GCWl50HQZIM&list=RDMMGCWl50HQZIM&start_radio=1',
      active: true
    }, {
      title: 'ChatGPT',
      url: 'https://chatgpt.com',
      // active: true
    }]);
  }

}
