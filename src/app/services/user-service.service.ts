import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://ethrift-jhrck.fibo.mn/api/product/';
const API_URL_user = 'https://ethrift-jhrck.fibo.mn/api/user/';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}
  // getPublicContent(): Observable<any> {
  //   return this.http.get(API_URL + 'all', { responseType: 'json' });
  // }
  // getDirectorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'director', { responseType: 'json' });
  // }
  // getManagerBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'manager', { responseType: 'json' });
  // }
  // getFinanceBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'finance', { responseType: 'json' });
  // }
  // getCustomBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'custom', { responseType: 'json' });
  // }
  // getUserBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'user', { responseType: 'json' });
  // }
  // getBrokerBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'broker', { responseType: 'json' });
  // }
  // getInsuranceBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'insurance', { responseType: 'json' });
  // }
  // getAdminBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'admin', { responseType: 'json' });
  // }
  create(requestJSON: any): Observable<any> {
    return this.http.post(API_URL + 'create', requestJSON, {
      responseType: 'json',
    });
  }
  findAll(): Observable<any> {
    return this.http.get(API_URL + '', { responseType: 'json' });
  }
  findByUserId(id: any): Observable<any> {
    return this.http.get(API_URL + 'owner/' + `${id}`, {
      responseType: 'json',
    });
  }
  findOne(userID: any): Observable<any> {
    return this.http.get(API_URL + `${userID}`, {
      responseType: 'json',
    });
  }
  update(editJSON: any): Observable<any> {
    return this.http.put(API_URL + 'update', editJSON, {
      responseType: 'json',
    });
  }
  delete(userID: any): Observable<any> {
    return this.http.delete(API_URL + 'delete', {
      params: { id: userID },
      responseType: 'json',
    });
  }
  findByRoleID(roleID: any): Observable<any> {
    return this.http.get(API_URL + `findByRoleID?roleId=${roleID}`, {
      responseType: 'json',
    });
  }
  findAllStaff(): Observable<any> {
    return this.http.get(API_URL + 'findAllStaff', { responseType: 'json' });
  }
  findUserByManagerId(ID: any): Observable<any> {
    return this.http.get(API_URL + `findUserByManagerId?ID=${ID}`, {
      responseType: 'json',
    });
  }  
  addToWishlist(requestJSON: any , id : any): Observable<any> {
    return this.http.put(API_URL_user + 'wishlist/add/'+`${id}`, requestJSON, {
      responseType: 'json',
    });
  }
  removeFromWishlist(requestJSON: any , id : any): Observable<any> {
    return this.http.put(API_URL + 'wishlist/remove/'+`${id}`, requestJSON, {
      responseType: 'json',
    });
  }
  getWishlist (ID: any): Observable<any> {
    return this.http.get(API_URL_user + 'wishlist/get/'+`${ID}`, { responseType: 'json' });
  }
  
}