import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Muser} from '../models/muser';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RegisterService {
  constructor(private http: Http) { }

  private _registerUrl = '/register';

  /*
  getHeroes() {
      return this.http.get(this._heroesUrl)
          .map(res => <Hero[]>res.json().data)
          .do(data => console.log(data)) // eyeball results in the console
          .catch(this.handleError);
  }
  */

  addMuser(muser: Muser): Observable<Muser> {

    let body = JSON.stringify({ muser });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._registerUrl, body, options)
      .map(res => <Muser>res.json().data)
      .catch(this.handleError)
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}