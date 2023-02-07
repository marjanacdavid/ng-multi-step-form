import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from "@angular/core";

@Component({
  selector: 'app-switch-toggle',
  templateUrl: './switch-toggle.component.html',
  styleUrls: ['./switch-toggle.component.css']
})
export class SwitchToggleComponent implements OnInit{
[x: string]: any;
  @Input() id?: string;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  value!: boolean;
//event: any;
//value: any;
val: any;
  constructor() {}

  ngOnInit() {}

  setValue(value: any) {
    this.value = value.checked;
    this.onChange.emit({ id: this.id, value: this.value });
  }
}
