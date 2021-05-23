import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FacilitatorService } from './../services/facilitator.service';
import { Facilitator } from './../models/facilitator';

const baseUrl = 'http://tocoder-001-site1.itempurl.com';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private facilitatorService: FacilitatorService) { }

  storeFacilitator(slug: string) {
    const facilitators = this.facilitatorService.getFacilitator(slug);
    return this.http.patch(`${baseUrl}/api/Facilitator`, facilitators).subscribe(response => {
      console.log(response);
    });
  }

  fetchFacilitator(page: number, pageSize: number) {
    const facilitators = this.facilitatorService.getAllFacilitator(page, pageSize);
    return this.http.get(`${baseUrl}/api/Course/${page}/${pageSize}`).subscribe(resData => {
      console.log(resData);
    })
  }
}
