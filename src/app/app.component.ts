import { Component, effect, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { RedditService } from './shared/data-access/reddit.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
  styles: [],
})
export class AppComponent {
  redditService = inject(RedditService);
  snackbar = inject(MatSnackBar);

  constructor() {
    effect(() => {
      const error = this.redditService.error();

      if (error !== null) {
        this.snackbar.open(error, 'Dismiss', { duration: 5000 });
      }
    });
  }
}
