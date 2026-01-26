import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserList} from './feateures/user-management/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-demo-app');
}
