import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ab-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
/**
 * Define se o input é multilinha
 */
  @Input() multiline = false;
  @Input() label = '';
  /** 
   * Forneça um id unico para cada input
   */
  @Input() id = '';
  @Input() placeholder = 'Text';
  @Input() disabled = false;

  getContainerClasses() {
    let classes = 'input-container';

    if (this.label) {
      classes += ' with-label';
    }

    return classes;
  }
}
