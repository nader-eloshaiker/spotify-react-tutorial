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
    Followers,
} from './';

/**
 * @export
 * @interface CurrentUserProfile
 */
export interface CurrentUserProfile {
    /**
     * The user\'s date-of-birth. This field is only available when the current user has granted access to the user-read-birthdate scope.
     * @type {string}
     * @memberof CurrentUserProfile
     */
    birthdate?: string;
    /**
     * The country of the user, as set in the user\'s account profile. An ISO 3166-1 alpha-2 country code. This field is only available when the current user has granted access to the user-read-private scope.
     * @type {string}
     * @memberof CurrentUserProfile
     */
    country?: string;
    /**
     * The name displayed on the user\'s profile.
     * @type {string}
     * @memberof CurrentUserProfile
     */
    displayName?: string;
    /**
     * The user\'s email address, as entered by the user when creating their account. This email address is unverified; there is no proof that it actually belongs to the user. This field is only available when the current user has granted access to the user-read-email scope.
     * @type {string}
     * @memberof CurrentUserProfile
     */
    email?: string;
    /**
     * Known external URLs for this user.
     * @type {{ [key: string]: string; }}
     * @memberof CurrentUserProfile
     */
    external_urls?: { [key: string]: string; };
    /**
     * @type {Followers}
     * @memberof CurrentUserProfile
     */
    followers?: Followers;
    /**
     * A link to the Web API endpoint for this user.
     * @type {string}
     * @memberof CurrentUserProfile
     */
    href?: string;
    /**
     * The Spotify ID for this user.
     * @type {string}
     * @memberof CurrentUserProfile
     */
    id?: string;
    /**
     * The user\'s Spotify subscription level: \'premium\', \'free\', etc. (The subscription level \'open\' can be considered the same as \'free\'.) This field is only available when the current user has granted access to the user-read-private scope.
     * @type {string}
     * @memberof CurrentUserProfile
     */
    product?: string;
    /**
     * The object type: \'user\'
     * @type {string}
     * @memberof CurrentUserProfile
     */
    type?: string;
    /**
     * The Spotify URI for the user.
     * @type {string}
     * @memberof CurrentUserProfile
     */
    uri?: string;
}
