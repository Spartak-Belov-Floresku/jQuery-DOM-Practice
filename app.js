$(()=>{
    $('#btn').on('click', () => {AddMovie($('input'))});
    $('#rate').on('click', () => {SortMovies("i")});
    $('#title').on('click', () => {SortMovies()});
});


function AddMovie(inputs){
    const movie = [];
        const ul = $("ul");
            ul.on("click", ".rem", function(e){ $(e.target).parent().remove();});
                inputs.each(function(){movie.push($(this).val());});
    if(movie[0].length < 2){
        alert("Movie's title has to have at least two characters!");
            return;
    }else if(movie[1] < 0 || movie[1] > 10){
        alert("Movie's rating has to be between 0 and 10!");
        return;
    }
    
    const li = $('<li>');
        const span = $('<span>');
            span.text(`Movie: ${movie[0]}, rating ${movie[1]}  `);
                const btn = $('<button class="rem"> Remove</button>');

    li.attr("data-rate", movie[1]);
        li.attr("data-movie", movie[0][0].toLowerCase());
            li.append(span);
                li.append(btn);
    ul.append(li);
    
}

function SortMovies(vol = ""){
    const lis = $('li');
        const movies = [];
            const ul = $("ul");
    ul.html("");
        lis.each(function(){ movies.push({title : $(this).html(), letter: $(this).attr('data-movie'), rating: $(this).attr('data-rate')}); });

    if(vol == "i"){
        movies.sort(function(a, b) {
            return a.rating - b.rating;
        });
    }else{
        movies.sort(function(a, b) {
            if (a.letter < b.letter) return -1;
            if (a.letter > b.letter) return 1;
            return 0;
        });
    }

    movies.forEach((movie) =>{
        const li = $('<li>');
            li.attr("data-rate", movie.rating);
                li.attr("data-movie", movie.title[13].toLowerCase());
                    li.html(movie.title);
        ul.append(li);
    });

}