import { Component } from '@angular/core';
import { theme, toggleTheme } from './theme.signal';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ng-control-flow-if';

  theme = theme;
  toggle = toggleTheme;
}
