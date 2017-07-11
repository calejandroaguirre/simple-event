import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IInvitation } from "interfaces/invitation";

@Injectable()
export class HeaderService{
    private _invitationUrl = 'api/invitations/invitations.json';

    constructor(private _http: Http){}

    getInvitations(): Observable<IInvitation[]>{
        return this._http.get(this._invitationUrl)
            .map((response:Response) => <IInvitation[]>response.json())
            .do(data => console.log("All " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}