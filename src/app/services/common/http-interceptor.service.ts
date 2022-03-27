import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const BASE_URL = 'http://localhost:8082/rapidapp';
    req = req.clone({ url: BASE_URL+req.url });

    if (req.url.includes('login')) {
      return next.handle(req);
    }

    // if (req.url.includes('trans')) {
    //   return next.handle(req);
    // }

    // if (req.url.includes('module')) {
    //   req = req.clone({
    //     setHeaders :{
    //       'Content-Type': 'application/json',
    //       'mode': 'no-cors',
    //       'Accept': 'application/json'
    //     }
    //   });
    //   return next.handle(req);
    // }


    let sessionToken = localStorage.getItem('jwtToken');
    console.log(sessionToken)

    req = req.clone({
      setHeaders :{
        Authorization: 'Bearer ' +sessionToken,
        'Content-Type': 'application/json',
        'mode': 'no-cors',
        'Accept': 'application/json'
      }
    });

    return next.handle(req);
    
    throw new Error('Method not implemented.');
  }
}
