var React = require('react');
var Movie = require('./movie');

var MovieList = React.createClass({

    render: function() {

        var movies = this.props.data.map(function(movie) {
            return (
                <Movie title={movie.title} apiKey={movie.id} key={movie.id}/>
            );
        })

        return (

            <div className="movie-list">

                {movies}

            </div>

        );

    }

});

module.exports = MovieList;