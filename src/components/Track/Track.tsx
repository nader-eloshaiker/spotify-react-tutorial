import React from "react"

import './Track.css'
import {TrackModel} from "../../models/track.model";

type PropsType = {
  readonly track: TrackModel
  readonly isRemoval: boolean
  readonly onAdd: (track: TrackModel) => void
  readonly onRemove: (track: TrackModel) => void
}

type StateType = {
  readonly track: string
}

class Track extends React.Component<PropsType, StateType> {
  state: StateType = {
      track: ''
  }

  addTrack = (): void => {
    this.props.onAdd(this.props.track)
  }

  removeTrack = (): void => {
    this.props.onRemove(this.props.track)
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}> - </button>
      )
    }

    return (
      <button className="Track-action" onClick={this.addTrack}> + </button>
    )
  }

  render() {
    return (
      <div className='Track'>
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
          <iframe
            src={"https://open.spotify.com/embed/track/" + this.props.track.id}
            width="300"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
            title="preview"
          />
        </div>
        {this.renderAction()}
      </div>
    )
  }
}

export default Track
