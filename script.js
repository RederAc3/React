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

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {key:movie.id},
        
        React.createElement('h2', {}, movie.title),
        React.createElement('img', {src: movie.img}),
        React.createElement('p', {}, movie.desc)

    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista Filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));