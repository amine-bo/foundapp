import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {

  constructor() {
    super();
  }

  handleError(error: any): void {
    if(error.message.includes("suggestions is undefined")){

    }else{
    super.handleError(error);
    }
  }
}