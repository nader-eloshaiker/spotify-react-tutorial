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
    PlaylistSimpleTracks,
    UserProfile,
} from './';

/**
 * @export
 * @interface PlaylistSimple
 */
export interface PlaylistSimple {
    /**
     * True if the owner allows other users to modify the playlist.
     * @type {boolean}
     * @memberof PlaylistSimple
     */
    collaborative?: boolean;
    /**
     * Known external URLs for this album.
     * @type {{ [key: string]: string; }}
     * @memberof PlaylistSimple
     */
    external_urls?: { [key: string]: string; };
    /**
     * A link to the Web API endpoint providing full details of the playlist.
     * @type {string}
     * @memberof PlaylistSimple
     */
    href?: string;
    /**
     * The Spotify ID of the playlist.
     * @type {string}
     * @memberof PlaylistSimple
     */
    id?: string;
    /**
     * The cover art for the album in various sizes, widest first.
     * @type {Array<Image>}
     * @memberof PlaylistSimple
     */
    images?: Array<Image>;
    /**
     * The name of the playlist.
     * @type {string}
     * @memberof PlaylistSimple
     */
    name?: string;
    /**
     * @type {UserProfile}
     * @memberof PlaylistSimple
     */
    owner?: UserProfile;
    /**
     * The playlist\'s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists.
     * @type {boolean}
     * @memberof PlaylistSimple
     */
    _public?: boolean;
    /**
     * The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
     * @type {string}
     * @memberof PlaylistSimple
     */
    snapshot_id?: string;
    /**
     * @type {PlaylistSimpleTracks}
     * @memberof PlaylistSimple
     */
    tracks?: PlaylistSimpleTracks;
    /**
     * The object type: \'playlist\'.
     * @type {string}
     * @memberof PlaylistSimple
     */
    type?: string;
    /**
     * Spotify URI of the playlist.
     * @type {string}
     * @memberof PlaylistSimple
     */
    uri?: string;
}
