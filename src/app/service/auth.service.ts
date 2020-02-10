import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  doRegister(value) {
    // return new Promise<any>((resolve, reject) => {
    //   firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
    //   .then(res => {
    //     resolve(res);
    //   }, err => reject(err))
    // })
    return new Promise<any>((resolve, reject) => {
    })
  }
}
