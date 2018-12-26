/**
 * APIS Integration Dialer Catix4
 * Documentação APIS - Dialer Catix4 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: desenvolvimento@optjuntos.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs/Observable';

import { CampaignsContact } from '../model/campaignsContact';
import { CampaignsContactResult } from '../model/campaignsContactResult';
import { CampaignsContactResultAll } from '../model/campaignsContactResultAll';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CampaignsContactService {

    protected basePath = 'http://catix4.optjuntos.com.br:8084/dialer';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Add a new campaigns-contact
     * 
     * @param body Object Added Campaigns_Contact
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addCampaignsContact(body: CampaignsContact, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addCampaignsContact(body: CampaignsContact, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addCampaignsContact(body: CampaignsContact, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addCampaignsContact(body: CampaignsContact, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addCampaignsContact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post(`${this.basePath}/campaigns-contact/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Finds All Campaigns Contact
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public campaignsContactGetAllGet(observe?: 'body', reportProgress?: boolean): Observable<CampaignsContactResultAll>;
    public campaignsContactGetAllGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CampaignsContactResultAll>>;
    public campaignsContactGetAllGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CampaignsContactResultAll>>;
    public campaignsContactGetAllGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/campaigns-contact/get-all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a campaigns-contact unic
     * 
     * @param campaignsContactUuid Campaign id to delete
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCampaignsContactId(campaignsContactUuid: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteCampaignsContactId(campaignsContactUuid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteCampaignsContactId(campaignsContactUuid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteCampaignsContactId(campaignsContactUuid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (campaignsContactUuid === null || campaignsContactUuid === undefined) {
            throw new Error('Required parameter campaignsContactUuid was null or undefined when calling deleteCampaignsContactId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.delete(`${this.basePath}/campaigns-contact/delete/${encodeURIComponent(String(campaignsContactUuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find campaigns-contact by ID
     * Returns a single campaign
     * @param campaignsContactUuid ID of campaigns contact to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCampaignsContactId(campaignsContactUuid: number, observe?: 'body', reportProgress?: boolean): Observable<CampaignsContactResult>;
    public getCampaignsContactId(campaignsContactUuid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CampaignsContactResult>>;
    public getCampaignsContactId(campaignsContactUuid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CampaignsContactResult>>;
    public getCampaignsContactId(campaignsContactUuid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (campaignsContactUuid === null || campaignsContactUuid === undefined) {
            throw new Error('Required parameter campaignsContactUuid was null or undefined when calling getCampaignsContactId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/campaigns-contact/get-by-id/${encodeURIComponent(String(campaignsContactUuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update an existing campaigns-contact
     * 
     * @param body Object Added Campaigns_Contact
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCampaignsContact(body: CampaignsContact, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateCampaignsContact(body: CampaignsContact, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateCampaignsContact(body: CampaignsContact, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateCampaignsContact(body: CampaignsContact, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateCampaignsContact.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put(`${this.basePath}/campaigns-contact/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

