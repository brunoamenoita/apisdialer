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

export interface Campaign { 
    campaignDescription?: string;
    /**
     * Estratégia de Discagem
     */
    dialerStrategyUuid: number;
    /**
     * Módulo de Discagem
     */
    callBackUuid: number;
    /**
     * Equivalente Domingo
     */
    campaignDayWeek1?: number;
    /**
     * Equivalente Segunda-Feira
     */
    campaignDayWeek2?: number;
    /**
     * Equivalente Terça-Feira
     */
    campaignDayWeek3?: number;
    /**
     * Equivalente Quarta-Feira
     */
    campaignDayWeek4?: number;
    /**
     * Equivalente Quinta-Feira
     */
    campaignDayWeek5?: number;
    /**
     * Equivalente Sexta-Feira
     */
    campaignDayWeek6?: number;
    /**
     * Equivalente Sábado
     */
    campaignDayWeek7?: number;
    campaignInitialDate?: Date;
    campaignInitialTime?: string;
    campaignFinalDate?: Date;
    campaignFinalTime?: string;
    /**
     * 0-Desativada / 1-Ativada
     */
    campaignStatus: number;
    /**
     * Número máximo de rediscagem de um contanto
     */
    campaignRedialMax?: number;
}