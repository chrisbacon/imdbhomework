var React = require('react');

var Movie = React.createClass({

    render: function() {

        return (

            <div className="comment">

                <span>Movie Title</span>

                <a>Showtime</a>

            </div>

        );

    }

});

module.exports = Movie;