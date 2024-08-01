import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import type { Gif } from '../../../shared/interfaces';
import { WINDOW } from '../../../shared/utils/injection-tokens';
import { GifPlayerComponent } from '../gif-player/gif-player.component';

@Component({
  selector: 'app-gif-list',
  standalone: true,
  imports: [GifPlayerComponent, MatToolbarModule, MatIconModule],
  template: `
    @for (gif of gifs(); track gif.permalink) {
    <div>
      <app-gif-player [src]="gif.src" [thumbnail]="gif.thumbnail" />

      <mat-toolbar color="primary">
        <span>{{ gif.title }}</span>
        <span class="toolbar-spacer"></span>
        <button
          mat-icon-button
          (click)="window.open('https://reddit.com/' + gif.permalink)"
        >
          <mat-icon>comment</mat-icon>
        </button>
      </mat-toolbar>
    </div>
    } @empty {
    <p>Can't find any gifs 🤷</p>
    }
  `,

  styles: [
    `
      div {
        margin: 1rem;
        border: 1px solid #ccc;
      }

      mat-toolbar {
        white-space: break-spaces;
      }

      p {
        font-size: 2em;
        width: 100%;
        text-align: center;
        margin-top: 4rem;
      }
    `,
  ],
})
export class GifListComponent {
  gifs = input.required<Gif[]>();

  window = inject(WINDOW);
}
