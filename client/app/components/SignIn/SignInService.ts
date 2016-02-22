import 'rxjs/Rx'
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Muser} from '../../models/muser';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SignInService {
  constructor(private http: Http) { }

  private _signInUrl = '/signin';
  private _musersUrl = '/getMusers';
  private errorMessage = '';


  getMusers() {
    return this.http.get(this._musersUrl)
      .map(res => <Muser[]>res.json().data)
      .do(data => console.log(data))
      .catch(this.handleError);
  }


  logMuser(muser: Muser): Observable<Muser> {

    let body = JSON.stringify({ muser });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this._signInUrl, body, options)
      .map(res => <Muser>res.json().data)
      .do(data => console.log(data))
      .catch(error => this.errorMessage = <any>error)
  }

  private handleError(error: Response) {
      console.log(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}