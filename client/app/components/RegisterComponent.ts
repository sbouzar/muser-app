import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

var html =
    `
<form method="POST">
  <div>
    <p class="lead text-center">Inscris-toi avec tes parents</p>
    <div class="form-group">
      <input type="email" class="form-control input-lg" id="email" name="email" placeholder="Email Address" value="" maxlength="150" required />
    </div>
    <div class="form-group">
      <input type="password" class="form-control input-lg" id="password" name="password" placeholder="Password" maxlength="50" required data-minlength="4" />
    </div>
    <div class="form-group">
      <input type="password" class="form-control input-lg" id="password-confirm" name="password-confirm" placeholder="Confirm Password" maxlength="50" data-match="#password" required data-minlength="4" />
    </div>
    <div class="form-group text-center">
      <label><input type="checkbox" required> By clicking Register, I agree I have read and accept <a href="#cgu-modal" data-toggle="modal">Muser's User Agreement</a></label>
    </div>
</div>
<div class="btn-group btn-group-justified actionbar-fixed-bottom" role="group">
  <div class="btn-group" role="group">
    <a [routerLink]="['Home']" class="btn btn-default btn-lg" role="button"><span class="glyphicon glyphicon-chevron-left pull-left" aria-hidden="true"></span>Go Back</a>
  </div>
  <div class="btn-group" role="group">
    <button type="submit" class="btn btn-primary btn-lg">Register<span class="glyphicon glyphicon-chevron-right pull-right" aria-hidden="true"></span></button>
  </div>
</div>
<div id="cgu-modal" class="modal fade main" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h5 class="modal-title">Conditions Générales d’Utilisation</h5>
      </div>
      <div class="modal-body-cgu">
        <div class="container-fluid">
          <article>
            {% include 'cguContent.html'%}
          </article>
        </div>
      </div>
        <div class="btn-group btn-group-justified" role="group">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-default btn-lg" data-dismiss="modal">
              <span class="glyphicon  pull-left" aria-hidden="true"></span>Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
`;

@Component({
    selector: 'register',
    template: html,
    directives: [ROUTER_DIRECTIVES]
})

export class RegisterComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}

