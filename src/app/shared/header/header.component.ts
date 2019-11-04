import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Output() addClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addNew() {
    this.addClicked.emit();
  }

}
