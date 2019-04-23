var movies = [
    {
        id: 1,
        img: 'https://i.ytimg.com/vi/tTJhOHXxa6w/hqdefault.jpg',
        title: 'Titanic',
        desc: 'Film o tragedii ogromnego statku'
    },
    {
        id: 2,
        img: 'https://ssl-gfx.filmweb.pl/po/63/16/776316/7875036.6.jpg',
        title: 'Król Lew',
        desc: 'Film opowiadający historię króla sawanny'
    },
    {
        id: 3,
        img: 'https://ocdn.eu/program-tv-transforms/1/vbhktkpTURBXy82NjNmYmQyYjE4NTFhNmE5ZjlmYWQ1YTNkNTc1YzA3Zi5qcGeRlQLNASwAwsM',
        title: 'W pustyni i w puszczy',
        desc: 'Podróże Stasia i Nel. Film nakręcony na podstawie książki Henryka Sienkiewicza'
    }
];

var Movie = React.createClass({

    propTypes: {
        movies: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDesctiption, { desc: this.props.movie.desc }),
                React.createElement(MovieList, { img: this.props.movie.img })
            )
        )
    },
});

var MovieTitle = React.createClass({

    propTypes: {
        movies: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDesctiption = React.createClass({

    propTypes: {
        movies: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    },
});

var MovieList = React.createClass({

    propTypes: {
        image: React.PropTypes.string.isRequired,
      },

    render: function () {
        return (
            React.createElement('img', { src: this.props.img })

        )
    },
});

var moviesElements = movies.map(function (movie) {
    return (
        React.createElement(Movie, { key: movie.id, movie: movie })
    )
});

var element = 
React.createElement('div', {}, 
    React.createElement('h1', {}, 'Lista filów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));