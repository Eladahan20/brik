import { Component, OnInit } from '@angular/core';
import { MailerService } from '../mailer.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _mailer:MailerService) { }
  isSend = false;
  ngOnInit() {
  }
  
  createMail(mail: any) {
    this.isSend = !this.isSend;
    this._mailer.sendMail(mail);
  }
  
}
