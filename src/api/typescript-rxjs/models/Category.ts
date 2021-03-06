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
    Image,
} from './';

/**
 * @export
 * @interface Category
 */
export interface Category {
    /**
     * A link to the Web API endpoint returning full details of the category.
     * @type {string}
     * @memberof Category
     */
    href?: string;
    /**
     * @type {Array<Image>}
     * @memberof Category
     */
    icons?: Array<Image>;
    /**
     * The Spotify category ID of the category.
     * @type {string}
     * @memberof Category
     */
    id?: string;
    /**
     * The name of the category.
     * @type {string}
     * @memberof Category
     */
    name?: string;
}
