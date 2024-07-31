import { Component, inject } from '@angular/core';
import { RedditService } from '../shared/data-access/reddit.service';
import { GifListComponent } from './ui/gif-list/gif-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GifListComponent],
  template: `
    <app-gif-list [gifs]="redditService.gifs()" class="grid-container" />
  `,
  styles: ``,
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
