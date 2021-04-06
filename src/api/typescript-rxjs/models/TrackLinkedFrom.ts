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
 * Part of the response when Track Relinking is applied, and the requested track has been replaced with different track. The track in the linked_from object contains information about the originally requested track.
 * @export
 * @interface TrackLinkedFrom
 */
export interface TrackLinkedFrom {
    /**
     * Known external URLs for this track.
     * @type {{ [key: string]: string; }}
     * @memberof TrackLinkedFrom
     */
    external_urls?: { [key: string]: string; };
    /**
     * A link to the Web API endpoint providing full details of the track.
     * @type {string}
     * @memberof TrackLinkedFrom
     */
    href?: string;
    /**
     * The Spotify ID for the track.
     * @type {string}
     * @memberof TrackLinkedFrom
     */
    id?: string;
    /**
     * The object type: \'track\'.
     * @type {string}
     * @memberof TrackLinkedFrom
     */
    type?: string;
    /**
     * The Spotify URI for the track.
     * @type {string}
     * @memberof TrackLinkedFrom
     */
    uri?: string;
}