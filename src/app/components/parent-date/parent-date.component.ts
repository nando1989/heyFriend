import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-date',
  imports: [],
  templateUrl: './parent-date.component.html',
  styleUrl: './parent-date.component.css'
})
export class ParentDateComponent {
  @Input() name: string = '';
  @Input() data!: {email:string, role:string}

}
