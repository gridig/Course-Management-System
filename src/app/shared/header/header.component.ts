import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() title: string;
  @Output() addClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addNew() {
    this.addClicked.emit();
  }

  ngOnDestroy(): void {
    this.addClicked.unsubscribe();
  }

}
