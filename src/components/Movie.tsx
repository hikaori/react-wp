import React, { Component } from 'react';

interface OwnProps {}
interface OwnState {
  movies: [
    {
      _embedded: {};
      title: { rendered: string };
      acf: { release_year: string; rating: string; description: string };
    }
  ];
}
class Movie extends Component<OwnProps, OwnState> {
  constructor(ownProps: any, ownState: any) {
    super(ownProps, ownState);
    this.state = {
      movies: [
        {
          _embedded: {},
          title: { rendered: '' },
          acf: { release_year: '', rating: '', description: '' },
        },
      ],
    };
  }
  componentDidMount() {
    let dataURL = 'http://localhost:8000/wp-json/wp/v2/movies?_embed';
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res,
        });
      });
  }
  render() {
    const movies2 = this.state.movies;
    console.log(movies2[0].title);
    let movies = this.state.movies.map((movie, index) => {
      return (
        <div key={index}>
          {/* <img
            src={
              movie._embedded['wp:featuredmedia'][0].media_details.sizes.large
                .source_url
            }
          /> */}
          <p>
            <strong>Title:</strong> {movie.title.rendered}
          </p>
          <p>
            <strong>Release Year:</strong> {movie.acf.release_year}
          </p>
          <p>
            <strong>Rating:</strong> {movie.acf.rating}
          </p>
          <div>
            <strong>Description:</strong>
            <div dangerouslySetInnerHTML={{ __html: movie.acf.description }} />
          </div>
        </div>
      );
    });
    return (
      <div>
        <h2>{movies}</h2>
      </div>
    );
  }
}
export default Movie;
