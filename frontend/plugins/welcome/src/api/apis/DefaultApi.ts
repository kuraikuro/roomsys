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


import * as runtime from '../runtime';
import {
    ControllersRoom,
    ControllersRoomFromJSON,
    ControllersRoomToJSON,
    EntRoom,
    EntRoomFromJSON,
    EntRoomToJSON,
    EntRoomInfo,
    EntRoomInfoFromJSON,
    EntRoomInfoToJSON,
    EntRoomStatus,
    EntRoomStatusFromJSON,
    EntRoomStatusToJSON,
    EntRoomType,
    EntRoomTypeFromJSON,
    EntRoomTypeToJSON,
} from '../models';

export interface CreateRoomRequest {
    room: ControllersRoom;
}

export interface CreateRoominfoRequest {
    roominfo: EntRoomInfo;
}

export interface CreateRoomstatusRequest {
    roomstatus: EntRoomStatus;
}

export interface CreateRoomtypeRequest {
    roomtype: EntRoomType;
}

export interface DeleteRoomRequest {
    id: number;
}

export interface DeleteRoominfoRequest {
    id: number;
}

export interface DeleteRoomstatusRequest {
    id: number;
}

export interface DeleteRoomtypeRequest {
    id: number;
}

export interface GetRoomRequest {
    id: number;
}

export interface GetRoominfoRequest {
    id: number;
}

export interface GetRoomstatusRequest {
    id: number;
}

export interface GetRoomtypeRequest {
    id: number;
}

export interface ListRoomRequest {
    limit?: number;
    offset?: number;
}

export interface ListRoominfoRequest {
    limit?: number;
    offset?: number;
}

export interface ListRoomstatusRequest {
    limit?: number;
    offset?: number;
}

export interface ListRoomtypeRequest {
    limit?: number;
    offset?: number;
}

export interface UpdateRoomRequest {
    id: number;
    room: EntRoom;
}

export interface UpdateRoominfoRequest {
    id: number;
    roominfo: EntRoomInfo;
}

export interface UpdateRoomstatusRequest {
    id: number;
    roomstatus: EntRoomStatus;
}

export interface UpdateRoomtypeRequest {
    id: number;
    roomtype: EntRoomType;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Create room
     * Create room
     */
    async createRoomRaw(requestParameters: CreateRoomRequest): Promise<runtime.ApiResponse<EntRoom>> {
        if (requestParameters.room === null || requestParameters.room === undefined) {
            throw new runtime.RequiredError('room','Required parameter requestParameters.room was null or undefined when calling createRoom.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/room`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ControllersRoomToJSON(requestParameters.room),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomFromJSON(jsonValue));
    }

    /**
     * Create room
     * Create room
     */
    async createRoom(requestParameters: CreateRoomRequest): Promise<EntRoom> {
        const response = await this.createRoomRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create roominfo
     * Create roominfo
     */
    async createRoominfoRaw(requestParameters: CreateRoominfoRequest): Promise<runtime.ApiResponse<EntRoomInfo>> {
        if (requestParameters.roominfo === null || requestParameters.roominfo === undefined) {
            throw new runtime.RequiredError('roominfo','Required parameter requestParameters.roominfo was null or undefined when calling createRoominfo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/roominfo`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntRoomInfoToJSON(requestParameters.roominfo),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomInfoFromJSON(jsonValue));
    }

    /**
     * Create roominfo
     * Create roominfo
     */
    async createRoominfo(requestParameters: CreateRoominfoRequest): Promise<EntRoomInfo> {
        const response = await this.createRoominfoRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create roomstatus
     * Create roomstatus
     */
    async createRoomstatusRaw(requestParameters: CreateRoomstatusRequest): Promise<runtime.ApiResponse<EntRoomStatus>> {
        if (requestParameters.roomstatus === null || requestParameters.roomstatus === undefined) {
            throw new runtime.RequiredError('roomstatus','Required parameter requestParameters.roomstatus was null or undefined when calling createRoomstatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/roomstatus`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntRoomStatusToJSON(requestParameters.roomstatus),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomStatusFromJSON(jsonValue));
    }

    /**
     * Create roomstatus
     * Create roomstatus
     */
    async createRoomstatus(requestParameters: CreateRoomstatusRequest): Promise<EntRoomStatus> {
        const response = await this.createRoomstatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create roomtype
     * Create roomtype
     */
    async createRoomtypeRaw(requestParameters: CreateRoomtypeRequest): Promise<runtime.ApiResponse<EntRoomType>> {
        if (requestParameters.roomtype === null || requestParameters.roomtype === undefined) {
            throw new runtime.RequiredError('roomtype','Required parameter requestParameters.roomtype was null or undefined when calling createRoomtype.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/roomtype`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EntRoomTypeToJSON(requestParameters.roomtype),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomTypeFromJSON(jsonValue));
    }

    /**
     * Create roomtype
     * Create roomtype
     */
    async createRoomtype(requestParameters: CreateRoomtypeRequest): Promise<EntRoomType> {
        const response = await this.createRoomtypeRaw(requestParameters);
        return await response.value();
    }

    /**
     * get room by ID
     * Delete a room entity by ID
     */
    async deleteRoomRaw(requestParameters: DeleteRoomRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteRoom.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/room/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * get room by ID
     * Delete a room entity by ID
     */
    async deleteRoom(requestParameters: DeleteRoomRequest): Promise<object> {
        const response = await this.deleteRoomRaw(requestParameters);
        return await response.value();
    }

    /**
     * get roominfo by ID
     * Delete a roominfo entity by ID
     */
    async deleteRoominfoRaw(requestParameters: DeleteRoominfoRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteRoominfo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/roominfo/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * get roominfo by ID
     * Delete a roominfo entity by ID
     */
    async deleteRoominfo(requestParameters: DeleteRoominfoRequest): Promise<object> {
        const response = await this.deleteRoominfoRaw(requestParameters);
        return await response.value();
    }

    /**
     * get roomstatus by ID
     * Delete a roomstatus entity by ID
     */
    async deleteRoomstatusRaw(requestParameters: DeleteRoomstatusRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteRoomstatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/roomstatus/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * get roomstatus by ID
     * Delete a roomstatus entity by ID
     */
    async deleteRoomstatus(requestParameters: DeleteRoomstatusRequest): Promise<object> {
        const response = await this.deleteRoomstatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * get roomtype by ID
     * Delete a roomtype entity by ID
     */
    async deleteRoomtypeRaw(requestParameters: DeleteRoomtypeRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteRoomtype.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/roomtype/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * get roomtype by ID
     * Delete a roomtype entity by ID
     */
    async deleteRoomtype(requestParameters: DeleteRoomtypeRequest): Promise<object> {
        const response = await this.deleteRoomtypeRaw(requestParameters);
        return await response.value();
    }

    /**
     * get room by ID
     * Get a room entity by ID
     */
    async getRoomRaw(requestParameters: GetRoomRequest): Promise<runtime.ApiResponse<EntRoom>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getRoom.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/room/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomFromJSON(jsonValue));
    }

    /**
     * get room by ID
     * Get a room entity by ID
     */
    async getRoom(requestParameters: GetRoomRequest): Promise<EntRoom> {
        const response = await this.getRoomRaw(requestParameters);
        return await response.value();
    }

    /**
     * get roominfo by ID
     * Get a roominfo entity by ID
     */
    async getRoominfoRaw(requestParameters: GetRoominfoRequest): Promise<runtime.ApiResponse<EntRoomInfo>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getRoominfo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/roominfo/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomInfoFromJSON(jsonValue));
    }

    /**
     * get roominfo by ID
     * Get a roominfo entity by ID
     */
    async getRoominfo(requestParameters: GetRoominfoRequest): Promise<EntRoomInfo> {
        const response = await this.getRoominfoRaw(requestParameters);
        return await response.value();
    }

    /**
     * get roomstatus by ID
     * Get a roomstatus entity by ID
     */
    async getRoomstatusRaw(requestParameters: GetRoomstatusRequest): Promise<runtime.ApiResponse<EntRoomStatus>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getRoomstatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/roomstatus/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomStatusFromJSON(jsonValue));
    }

    /**
     * get roomstatus by ID
     * Get a roomstatus entity by ID
     */
    async getRoomstatus(requestParameters: GetRoomstatusRequest): Promise<EntRoomStatus> {
        const response = await this.getRoomstatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * get roomtype by ID
     * Get a roomtypes entity by ID
     */
    async getRoomtypeRaw(requestParameters: GetRoomtypeRequest): Promise<runtime.ApiResponse<EntRoomType>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getRoomtype.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/roomtype/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomTypeFromJSON(jsonValue));
    }

    /**
     * get roomtype by ID
     * Get a roomtypes entity by ID
     */
    async getRoomtype(requestParameters: GetRoomtypeRequest): Promise<EntRoomType> {
        const response = await this.getRoomtypeRaw(requestParameters);
        return await response.value();
    }

    /**
     * list room entities
     * List room entities
     */
    async listRoomRaw(requestParameters: ListRoomRequest): Promise<runtime.ApiResponse<Array<EntRoom>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/room`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntRoomFromJSON));
    }

    /**
     * list room entities
     * List room entities
     */
    async listRoom(requestParameters: ListRoomRequest): Promise<Array<EntRoom>> {
        const response = await this.listRoomRaw(requestParameters);
        return await response.value();
    }

    /**
     * list roominfo entities
     * List roominfo entities
     */
    async listRoominfoRaw(requestParameters: ListRoominfoRequest): Promise<runtime.ApiResponse<Array<EntRoomInfo>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/roominfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntRoomInfoFromJSON));
    }

    /**
     * list roominfo entities
     * List roominfo entities
     */
    async listRoominfo(requestParameters: ListRoominfoRequest): Promise<Array<EntRoomInfo>> {
        const response = await this.listRoominfoRaw(requestParameters);
        return await response.value();
    }

    /**
     * list roomstatus entities
     * List roomstatus entities
     */
    async listRoomstatusRaw(requestParameters: ListRoomstatusRequest): Promise<runtime.ApiResponse<Array<EntRoomStatus>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/roomstatus`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntRoomStatusFromJSON));
    }

    /**
     * list roomstatus entities
     * List roomstatus entities
     */
    async listRoomstatus(requestParameters: ListRoomstatusRequest): Promise<Array<EntRoomStatus>> {
        const response = await this.listRoomstatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * list roomtype entities
     * List roomtype entities
     */
    async listRoomtypeRaw(requestParameters: ListRoomtypeRequest): Promise<runtime.ApiResponse<Array<EntRoomType>>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/roomtype`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EntRoomTypeFromJSON));
    }

    /**
     * list roomtype entities
     * List roomtype entities
     */
    async listRoomtype(requestParameters: ListRoomtypeRequest): Promise<Array<EntRoomType>> {
        const response = await this.listRoomtypeRaw(requestParameters);
        return await response.value();
    }

    /**
     * update room by ID
     * Update a room entity by ID
     */
    async updateRoomRaw(requestParameters: UpdateRoomRequest): Promise<runtime.ApiResponse<EntRoom>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateRoom.');
        }

        if (requestParameters.room === null || requestParameters.room === undefined) {
            throw new runtime.RequiredError('room','Required parameter requestParameters.room was null or undefined when calling updateRoom.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/room/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EntRoomToJSON(requestParameters.room),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomFromJSON(jsonValue));
    }

    /**
     * update room by ID
     * Update a room entity by ID
     */
    async updateRoom(requestParameters: UpdateRoomRequest): Promise<EntRoom> {
        const response = await this.updateRoomRaw(requestParameters);
        return await response.value();
    }

    /**
     * update roominfo by ID
     * Update a roominfo entity by ID
     */
    async updateRoominfoRaw(requestParameters: UpdateRoominfoRequest): Promise<runtime.ApiResponse<EntRoomInfo>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateRoominfo.');
        }

        if (requestParameters.roominfo === null || requestParameters.roominfo === undefined) {
            throw new runtime.RequiredError('roominfo','Required parameter requestParameters.roominfo was null or undefined when calling updateRoominfo.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/roominfo/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EntRoomInfoToJSON(requestParameters.roominfo),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomInfoFromJSON(jsonValue));
    }

    /**
     * update roominfo by ID
     * Update a roominfo entity by ID
     */
    async updateRoominfo(requestParameters: UpdateRoominfoRequest): Promise<EntRoomInfo> {
        const response = await this.updateRoominfoRaw(requestParameters);
        return await response.value();
    }

    /**
     * update roomstatus by ID
     * Update a roomstatus entity by ID
     */
    async updateRoomstatusRaw(requestParameters: UpdateRoomstatusRequest): Promise<runtime.ApiResponse<EntRoomStatus>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateRoomstatus.');
        }

        if (requestParameters.roomstatus === null || requestParameters.roomstatus === undefined) {
            throw new runtime.RequiredError('roomstatus','Required parameter requestParameters.roomstatus was null or undefined when calling updateRoomstatus.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/roomstatus/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EntRoomStatusToJSON(requestParameters.roomstatus),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomStatusFromJSON(jsonValue));
    }

    /**
     * update roomstatus by ID
     * Update a roomstatus entity by ID
     */
    async updateRoomstatus(requestParameters: UpdateRoomstatusRequest): Promise<EntRoomStatus> {
        const response = await this.updateRoomstatusRaw(requestParameters);
        return await response.value();
    }

    /**
     * update roomtype by ID
     * Update a roomtype entity by ID
     */
    async updateRoomtypeRaw(requestParameters: UpdateRoomtypeRequest): Promise<runtime.ApiResponse<EntRoomType>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateRoomtype.');
        }

        if (requestParameters.roomtype === null || requestParameters.roomtype === undefined) {
            throw new runtime.RequiredError('roomtype','Required parameter requestParameters.roomtype was null or undefined when calling updateRoomtype.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/roomtype/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: EntRoomTypeToJSON(requestParameters.roomtype),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EntRoomTypeFromJSON(jsonValue));
    }

    /**
     * update roomtype by ID
     * Update a roomtype entity by ID
     */
    async updateRoomtype(requestParameters: UpdateRoomtypeRequest): Promise<EntRoomType> {
        const response = await this.updateRoomtypeRaw(requestParameters);
        return await response.value();
    }

}
