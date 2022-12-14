/* tslint:disable */
/* eslint-disable */
/**
 * Empathy
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  UpdateUsers200Response,
  User,
} from '../models';
import {
    UpdateUsers200ResponseFromJSON,
    UpdateUsers200ResponseToJSON,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface GetUsersRequest {
    limit?: number;
}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI {

    /**
     * Create a user
     * Create
     */
    async createUsersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateUsers200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateUsers200ResponseFromJSON(jsonValue));
    }

    /**
     * Create a user
     * Create
     */
    async createUsers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateUsers200Response> {
        const response = await this.createUsersRaw(initOverrides);
        return await response.value();
    }

    /**
     * List all users
     * List
     */
    async getUsersRaw(requestParameters: GetUsersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     * List all users
     * List
     */
    async getUsers(requestParameters: GetUsersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.getUsersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a user
     * Update
     */
    async updateUsersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UpdateUsers200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UpdateUsers200ResponseFromJSON(jsonValue));
    }

    /**
     * Update a user
     * Update
     */
    async updateUsers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UpdateUsers200Response> {
        const response = await this.updateUsersRaw(initOverrides);
        return await response.value();
    }

}
