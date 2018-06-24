import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class MailerService {
  result: any;
  constructor(private _http: Http) { 

  }
  sendMail(mailbody) {
    return this._http.post('/send', mailbody);
    
  }

}
