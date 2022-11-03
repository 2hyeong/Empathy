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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Friend
 */
export interface Friend {
    /**
     * 
     * @type {string}
     * @memberof Friend
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Friend
     */
    personality?: string;
}

/**
 * Check if a given object implements the Friend interface.
 */
export function instanceOfFriend(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FriendFromJSON(json: any): Friend {
    return FriendFromJSONTyped(json, false);
}

export function FriendFromJSONTyped(json: any, ignoreDiscriminator: boolean): Friend {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'personality': !exists(json, 'personality') ? undefined : json['personality'],
    };
}

export function FriendToJSON(value?: Friend | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'personality': value.personality,
    };
}
