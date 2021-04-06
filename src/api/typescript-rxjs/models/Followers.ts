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

/**
 * Information about the followers of the artist.
 * @export
 * @interface Followers
 */
export interface Followers {
    /**
     * A link to the Web API endpoint providing full details of the followers; null if not available.
     * @type {string}
     * @memberof Followers
     */
    href?: string;
    /**
     * The total number of followers.
     * @type {number}
     * @memberof Followers
     */
    total?: number;
}
