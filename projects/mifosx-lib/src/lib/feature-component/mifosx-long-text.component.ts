import { Component, Input } from '@angular/core';

@Component({
  selector: 'mifosx-long-text',
  template: `
    <span [title]="textValue">
      {{ truncatedText }}
    </span>
  `,
  styles: [`
    span {
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `]
})
export class MifosxLongTextComponent {
  @Input() textValue: string = '';
  @Input() chars: number = 35;

  get truncatedText(): string {
    return this.textValue.length > this.chars ? this.textValue.substring(0, this.chars) + '...' : this.textValue;
  }
}
