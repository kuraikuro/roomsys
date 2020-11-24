/* tslint:disable */
/* eslint-disable */
/**
 * SUT SA Example API
 * This is a sample server for SUT SE 2563
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EntRoom,
    EntRoomFromJSON,
    EntRoomFromJSONTyped,
    EntRoomToJSON,
} from './';

/**
 * 
 * @export
 * @interface EntRoomTypeEdges
 */
export interface EntRoomTypeEdges {
    /**
     * Room holds the value of the room edge.
     * @type {Array<EntRoom>}
     * @memberof EntRoomTypeEdges
     */
    room?: Array<EntRoom>;
}

export function EntRoomTypeEdgesFromJSON(json: any): EntRoomTypeEdges {
    return EntRoomTypeEdgesFromJSONTyped(json, false);
}

export function EntRoomTypeEdgesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntRoomTypeEdges {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'room': !exists(json, 'Room') ? undefined : ((json['Room'] as Array<any>).map(EntRoomFromJSON)),
    };
}

export function EntRoomTypeEdgesToJSON(value?: EntRoomTypeEdges | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'room': value.room === undefined ? undefined : ((value.room as Array<any>).map(EntRoomToJSON)),
    };
}


