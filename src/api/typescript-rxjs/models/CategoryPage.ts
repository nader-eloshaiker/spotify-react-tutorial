// tslint:disable
/**
 * Spotify Web API
 * Welcome to the _Spotify Web API_ specification. For more information about how to use the API, check out [Spotify\'s developer site](https://developer.spotify.com/web-api/). 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    Category,
} from './';

/**
 * @export
 * @interface CategoryPage
 */
export interface CategoryPage {
    /**
     * A link to the Web API endpoint returning the full result of the request.
     * @type {string}
     * @memberof CategoryPage
     */
    href?: string;
    /**
     * The requested data.
     * @type {Array<Category>}
     * @memberof CategoryPage
     */
    items?: Array<Category>;
    /**
     * The maximum number of items in the response (as set in the query or by default).
     * @type {number}
     * @memberof CategoryPage
     */
    limit?: number;
    /**
     * URL to the next page of items. (null if none)
     * @type {string}
     * @memberof CategoryPage
     */
    next?: string;
    /**
     * The offset of the items returned (as set in the query or by default).
     * @type {number}
     * @memberof CategoryPage
     */
    offset?: number;
    /**
     * URL to the previous page of items. (null if none)
     * @type {string}
     * @memberof CategoryPage
     */
    previous?: string;
    /**
     * The total number of items available to return.
     * @type {number}
     * @memberof CategoryPage
     */
    total?: number;
}