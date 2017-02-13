var React = require('react');

var Movie = React.createClass({

    render: function() {

        return (

            <div className="movie">

                <span>{this.props.title}</span>

                <a href={"http://imdb.com/fakeapi/showtimes/movie/"+ this.props.apiKey}>Showtime</a>

            </div>

        );

    }

});

module.exports = Movie;