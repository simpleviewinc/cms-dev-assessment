var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

fetch('https://sv-reqres.now.sh/api/listings')
    .then(res => res.clone().json())
    .then(json => {
        change(json.data)
        
    })

const change = (array) => {
    array.map((ele, idx) => {
        if (idx % 3 === 0) {
            $('#grid').append(
                $('<div/>')
                    .attr("id", `row-${idx / 3}`)
                    .attr("class", `row`)
            );
        }
        $(`#row-${Math.floor(idx / 3)}`).append(
            $('<div/>')
                .attr("class", `col-${idx % 6}`)
                .append(
                    $('<img/>')
                        .attr('src', `${ele.mediaurl}`)
                        .on('error', function () {
                            $(this).attr("src", '../../comps/fallback.jpg')
                        })
                )
                .append(
                    $('<div/>')
                        .append(
                            $('<h1/>')
                                .html(`${ele.title}`)
                        )
                        .append(
                            $('<p/>')
                                .html(`${ele.description}`)
                        )
                        .append(
                            $('<p/>')
                                .attr("class", `read-more`)
                        )
                )
        )
    })
}


