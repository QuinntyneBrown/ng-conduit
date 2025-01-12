import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-feed-toggle',
  template: `
    <div class="feed-toggle">
      <ul class="nav nav-pills outline-active">
        <li class="nav-item">
          <a
            class="nav-link"
            [class.disabled]="isFeedDisabled"
            [class.active]="feedType === 'feed' && !selectedTag"
            (click)="selectFeed.emit()"
          >
            Your Feed
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            [class.active]="feedType === 'global' && !selectedTag"
            (click)="selectGlobal.emit()"
          >
            Global Feed
          </a>
        </li>
        <li class="nav-item" *ngIf="selectedTag">
          <a class="nav-link active">#{{ selectedTag }}</a>
        </li>
      </ul>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class FeedToggle {
  @Input() selectedTag?: string;
  @Input() feedType: 'global' | 'feed' = 'global';
  @Input() isFeedDisabled = true;

  @Output() selectGlobal = new EventEmitter();
  @Output() selectFeed = new EventEmitter();
}
