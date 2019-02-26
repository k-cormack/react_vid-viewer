import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';


class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search/', {
      params: {
        q: term
      }
    })
    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar searchTerm={this.onTermSubmit} />
        {this.state.videos.length} videos have been found!
      </div>
    );
  }
}

export default App;