import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentWillMount() {
    this.onTermSubmit('dodge challenger');
  }

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtube.get('/search/', {
      params: {
        q: term
      }
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
    console.log(this.state.videos);
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
    console.log('from the App! ', video)
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar searchTerm={this.onTermSubmit} />
        {this.state.videos.length} videos have been found!
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                  videos={this.state.videos}
                  onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;