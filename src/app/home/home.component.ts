import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { RedditService } from '../shared/data-access/reddit.service';
import { GifListComponent } from './ui/gif-list/gif-list.component';
import { SearchBarComponent } from './ui/search-bar/search-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    GifListComponent,
    InfiniteScrollDirective,
    SearchBarComponent,
    MatProgressSpinnerModule,
  ],
  template: `
    <app-search-bar [control]="redditService.subredditFormControl" />

    @if (redditService.loading()) {
    <mat-progress-spinner mode="indeterminate" diameter="50" />
    } @else {
    <app-gif-list
      [gifs]="redditService.gifs()"
      infiniteScroll
      (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
      class="grid-container"
    />
    }
  `,
  styles: `
  mat-progress-spinner {
        margin: 2rem auto;
      }`,
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
