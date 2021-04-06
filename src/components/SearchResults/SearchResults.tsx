import React from "react";
import './SearchResults.css'

import TrackList from "../TrackList/TrackList";
import {TrackModel} from "../../models/track.model";

type PropsType = {
  readonly SearchResults: Array<TrackModel>
  readonly onAdd: (track: TrackModel) => void
}

class SearchResults extends React.Component<PropsType> {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList
          tracks={this.props.SearchResults}
          onAdd={this.props.onAdd}
          />
      </div>
    )
  }
}

export default SearchResults
