import React from "react";
import './PlayList.css'

import TrackList from "../TrackList/TrackList";
import {TrackModel} from "../../models/track.model";

type PropsType = {
  onNameChange: (name: string) => void
  onRemove: (track: TrackModel) => void
  onSave: () => void
  playlistTracks: Array<TrackModel>
  isRemoval: boolean
}

class PlayList extends React.Component<PropsType> {

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onNameChange(event.target.value)
  }

  render() {
    return (
      <div className="PlayList">
        <input onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
        <TrackList
          tracks={this.props.playlistTracks}
          isRemoval={true}
          onRemove={this.props.onRemove}
        />
          <button className="PlayList-save" onClick={this.props.onSave}>
            Save to Spotify
          </button>
      </div>
    )
  }
}

export default PlayList
