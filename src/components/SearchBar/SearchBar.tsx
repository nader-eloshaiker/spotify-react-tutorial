import React from "react"

import './SearchBar.css'

type StateType = {
  readonly term: string
}

type PropsType = {
  readonly onSearch: (term: string) => void
}

class SearchBar extends React.Component<PropsType, StateType> {
  state: StateType = {
    term: ''
  }

  handleTermChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({term: event.target.value})
  }

  handleEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      this.search()
    }
  }

  search = (): void => {
    this.props.onSearch(this.state.term)
  }

  render() {
    return (
      <div className='SearchBar'>
        <input
          placeholder="Enter song, album or artist"
          onChange={this.handleTermChange}
          onKeyUp={this.handleEnter}
        />
        <button className="SearchButton" onClick={this.search}>Search</button>
      </div>
    )
  }
}

export default SearchBar
