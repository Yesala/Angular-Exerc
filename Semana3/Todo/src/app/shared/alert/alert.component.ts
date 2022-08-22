import { Component, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { bnTypes } from '../helpers/constanst';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  constructor(private configAlert : NgbAlertConfig) { 
    configAlert.type = bnTypes.SUCCESS
    configAlert.dismissible = true
    console.log('Constructor')
  }

  ngOnInit(): void {
    const alert = document.getElementById('alert')
    if (alert) {
      alert.style.display = 'none'
    }
    console.log('OnInit')
  }

  close(){
    const alert = document.getElementById('alert')
    if (alert) {
      alert.style.display = 'none'
    }
  }

}
