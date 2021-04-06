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
    PlaylistSimplePage,
} from './';

/**
 * @export
 * @interface FeaturedPlaylists
 */
export interface FeaturedPlaylists {
    /**
     * A sentence describing the context for the featured playlists.
     * @type {string}
     * @memberof FeaturedPlaylists
     */
    message?: string;
    /**
     * @type {PlaylistSimplePage}
     * @memberof FeaturedPlaylists
     */
    playlists?: PlaylistSimplePage;
}
