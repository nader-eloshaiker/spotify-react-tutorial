import React from 'react'
import './App.css'

import PlayList from '../PlayList/PlayList'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import SpotifyService from '../../services/spotify.service'
import {TrackModel} from "../../models/track.model";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

type StateType = {
  readonly searchResults: Array<TrackModel>
  readonly playlistName: string
  readonly playlistTracks: Array<TrackModel>
}

type PropsType = {}

class App extends React.Component<PropsType, StateType> {
  private readonly _unsubscribe: Subject<void> = new Subject()

  state: StateType = {
    searchResults: [],
    playlistName: 'New Playlist',
    playlistTracks: []
  }

  componentWillUnmount() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  search = (term: string): void => {
    SpotifyService.search(term)
      .pipe(
        takeUntil(this._unsubscribe),
      )
      .subscribe(searchResults => {
      this.setState({searchResults})
    })
  }

  removeTrack = (track: TrackModel): void => {
    let tracks = this.state.playlistTracks
    const searchResults = this.state.searchResults

    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    searchResults.unshift(track)

    this.setState({playlistTracks: tracks})
  }

  queueTrack = (track: TrackModel): void => {
    this._addTrack(track)
    this._removeTrackSearch(track)
  }

  updatePlaylistName = (name: string) => {
    this.setState({playlistName: name})
  }

  savePlaylist = (): void => {
    const trackUrls = this.state.playlistTracks.map(track => track.uri)
    SpotifyService.savePlaylist(this.state.playlistName, trackUrls).subscribe(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      })
    })
  }

  render() {
    return (
      <div>
        <h1>
          <a href="http://localhost:3000">React Music Player</a>
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults SearchResults={this.state.searchResults} onAdd={this.queueTrack}/>
            <PlayList
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
              isRemoval={true}
            />
          </div>
        </div>
      </div>
    );
  }

  private _addTrack = (track: TrackModel): void => {
    const tracks = this.state.playlistTracks

    if (tracks.find(queuedTrack => queuedTrack.id === track.id)) {
      return
    }

    tracks.push(track)
    this.setState({playlistTracks: tracks})
  }

  private _removeTrackSearch = (track: TrackModel): void => {
    let tracks = this.state.searchResults
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id)
    this.setState({searchResults: tracks})
  }
}

export default App;
