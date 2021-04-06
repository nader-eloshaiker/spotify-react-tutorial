import React from "react";
import './TrackList.css'

import Track from "../Track/Track";
import {TrackModel} from "../../models/track.model";

type PropsType = {
  readonly tracks: Array<TrackModel>
  readonly isRemoval?: boolean
  readonly onAdd?: (track: TrackModel) => void
  readonly onRemove?: (track: TrackModel) => void
}

class TrackList extends React.Component<PropsType> {
  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map((track) => {
            return (
              <Track
                track={track}
                key={track.id}
                onAdd={this.props.onAdd || (() => {})}
                isRemoval={this.props.isRemoval || false}
                onRemove={this.props.onRemove || (() => {})}
              />
            )
          })
        }
      </div>
    )
  }
}

export default TrackList
