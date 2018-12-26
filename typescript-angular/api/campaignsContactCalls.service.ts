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
import { CampaignsContactCalls } from '../model/campaignsContactCalls';
import { CampaignsContactCallsResult } from '../model/campaignsContactCallsResult';
import { CampaignsContactCallsResultAll } from '../model/campaignsContactCallsResultAll';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class CampaignsContactCallsService {

    protected basePath = 'https://virtserver.swaggerhub.com/catix4/dialer/1.0.0';
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
     * Add a new campaigns-contact-calls
     * 
     * @param body Object Added Campaigns_Contact_Calls
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addCampaignsContactCalls(body: CampaignsContactCalls, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addCampaignsContactCalls(body: CampaignsContactCalls, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addCampaignsContactCalls(body: CampaignsContactCalls, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addCampaignsContactCalls(body: CampaignsContactCalls, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addCampaignsContactCalls.');
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

        return this.httpClient.post(`${this.basePath}/campaigns-contact-calls/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Finds All Campaigns Contact Calls
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public campaignsContactCallsGetAllGet(observe?: 'body', reportProgress?: boolean): Observable<CampaignsContactCallsResultAll>;
    public campaignsContactCallsGetAllGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CampaignsContactCallsResultAll>>;
    public campaignsContactCallsGetAllGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CampaignsContactCallsResultAll>>;
    public campaignsContactCallsGetAllGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.get(`${this.basePath}/campaigns-contact-calls/get-all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Deletes a campaigns-contact-call unic
     * 
     * @param campaignsContactCallUuid Campaign Contact Call id to delete
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteCampaignsContactCallId(campaignsContactCallUuid: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteCampaignsContactCallId(campaignsContactCallUuid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteCampaignsContactCallId(campaignsContactCallUuid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteCampaignsContactCallId(campaignsContactCallUuid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (campaignsContactCallUuid === null || campaignsContactCallUuid === undefined) {
            throw new Error('Required parameter campaignsContactCallUuid was null or undefined when calling deleteCampaignsContactCallId.');
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

        return this.httpClient.delete(`${this.basePath}/campaigns-contact-calls/delete/${encodeURIComponent(String(campaignsContactCallUuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find campaigns-contact-calls by ID
     * Returns a single campaign
     * @param campaignsContactCallUuid ID of campaigns contact call to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getCampaignsCallsContactId(campaignsContactCallUuid: number, observe?: 'body', reportProgress?: boolean): Observable<CampaignsContactCallsResult>;
    public getCampaignsCallsContactId(campaignsContactCallUuid: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<CampaignsContactCallsResult>>;
    public getCampaignsCallsContactId(campaignsContactCallUuid: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<CampaignsContactCallsResult>>;
    public getCampaignsCallsContactId(campaignsContactCallUuid: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (campaignsContactCallUuid === null || campaignsContactCallUuid === undefined) {
            throw new Error('Required parameter campaignsContactCallUuid was null or undefined when calling getCampaignsCallsContactId.');
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

        return this.httpClient.get(`${this.basePath}/campaigns-contact-calls/get-by-id/${encodeURIComponent(String(campaignsContactCallUuid))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update an existing campaigns-contact-calls
     * 
     * @param body Object Added Campaigns_Contact
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateCampaignsContactCalls(body: CampaignsContact, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateCampaignsContactCalls(body: CampaignsContact, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateCampaignsContactCalls(body: CampaignsContact, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateCampaignsContactCalls(body: CampaignsContact, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateCampaignsContactCalls.');
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

        return this.httpClient.put(`${this.basePath}/campaigns-contact-calls/`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

