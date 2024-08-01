import { Component, input } from '@angular/core';
import { ReactiveFormsModule, type FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
  ],
  template: `
    <mat-toolbar>
      <mat-form-field appearance="outline">
        <input
          matInput
          placeholder="subreddit..."
          type="text"
          [formControl]="control()"
        />
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
    </mat-toolbar>
  `,
  styles: `
      mat-toolbar {
        height: 80px;
      }

      mat-form-field {
        width: 100%;
        padding-top: 20px;
      }`,
})
export class SearchBarComponent {
  control = input.required<FormControl>();
}
