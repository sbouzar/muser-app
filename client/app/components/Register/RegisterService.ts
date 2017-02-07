import 'rxjs/Rx'
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Muser} from '../../models/muser';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RegisterService {
  constructor(private http: Http) { }

  private _registerUrl = '/register';
  private _musersUrl = '/getMusers';

  
  getMusers() {
    return this.http.get(this._musersUrl)
      .map(res => <Muser[]>res.json().data)
      .do(data => console.log(data))
      .catch(this.handleError);
  }
  

  addMuser(muser: Muser): Observable<Muser> {

    let body = JSON.stringify({ muser });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._registerUrl, body, options)
      .map(res => <Muser>res.json().data)
      .do(data => console.log(data))
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}