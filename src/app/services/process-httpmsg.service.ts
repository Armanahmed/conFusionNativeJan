import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

// import { Observable } from 'rxjs';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class ProcessHTTPMsgService {
	
	constructor() { }

	public handleError(error: HttpErrorResponse | any) {
		let errMsg: string;

		if (error.error instanceof ErrorEvent) {
			errMsg = error.error.message;
		} else {
			errMsg = `${error.status} - ${error.statusText || ''} ${error.message}`;
		}

		return throwError(errMsg);
	}
}
