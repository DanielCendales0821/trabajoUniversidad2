import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import {GeneralService} from 'src/app/services/general.service';

@Injectable({
  providedIn: 'root'
})
export class HTTPLoaderInterceptorService implements HttpInterceptor {

  constructor(readonly loadingService: GeneralService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.abrirSpinner();
    return next.handle(request)
      .pipe(
        finalize(() => {
          this.loadingService.cerrarSpinner();
        })
      );
  }
}


