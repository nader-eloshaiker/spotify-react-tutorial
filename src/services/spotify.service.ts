import {TrackModel} from "../models/track.model"
import {Playlist, PlaylistSnapshot, RawAjaxResponse} from "../api/typescript-rxjs"
import {DefaultApi} from "../api/typescript-rxjs/apis/DefaultApi"
import {Configuration} from "../api/typescript-rxjs/runtime"
import {forkJoin, Observable, of} from "rxjs";
import {concatMap, map} from "rxjs/operators";

const clientId = 'add your api key here'
const redirectUri = 'http://localhost:3000/'
let apiAccessToken: string

const getApiAccessToken = (name?: string, scopes?: string[]): string => {
  if (apiAccessToken) {
    return apiAccessToken
  }

  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

  if (accessTokenMatch && expiresInMatch) {
    apiAccessToken = `Bearer ${accessTokenMatch[1]}`
    const expiresIn = Number(expiresInMatch[1])
    window.setTimeout(() => (apiAccessToken = ''), expiresIn * 1000)
    window.history.pushState("Access Token", name || 'accessToken', '/')

    return apiAccessToken
  } else {
    window.location.assign(
      `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
    )
    return ''
  }
}

const spotifyApi = new DefaultApi(new Configuration({accessToken: getApiAccessToken}))

const SpotifyService = {
  search: (term: string): Observable<Array<TrackModel>> => {
    return spotifyApi.searchGet({q: term, type: 'track'})
      .pipe(
        map((search) => search.tracks?.items?.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists ? track.artists[0].name : undefined,
          album: track.album?.name,
          uri: track.uri
        } as TrackModel)) || [])
      )
  },

  savePlaylist: (name: string, trackUris: Array<string>): Observable<PlaylistSnapshot> => {
    return spotifyApi.meGet()
      .pipe(
        concatMap((profile) => forkJoin({
            playlist: spotifyApi.usersUserIdPlaylistsPost({userId: profile.id!, body: {name}}),
            userId: of(profile.id!)
          })
        ),
        concatMap(({userId, playlist}: { playlist: Playlist, userId: string }) =>
          spotifyApi.usersUserIdPlaylistsPlaylistIdTracksPost({
            userId: userId!, playlistId: playlist.id!, uris: trackUris.join()
          })
        )
      )
  }
}

export default SpotifyService
