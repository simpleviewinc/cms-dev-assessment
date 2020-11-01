// $(function() {
//    var location = [];

//    $.getJSON('data.json', function(data) { 
//     $.each(data.data, function(i, f) {
//         var tblRow = "<tr>" + "<td>" + f.mediaurl + "</td>" +
//          "<td>" + f.title + "</td>" + "<td>" + f.description + "</td>" + "</tr>"
//          $(tblRow).appendTo("#locationdata tbody");
//    });
//    });
// });

// $(function() {
//     var location = [];

//     $.getJSON('data.json', function(data) {
//         $.each(data.data, function(i, item) {
//             $( "<img>" ).attr( "src", item.mediaurl).appendTo( "#images" );
//         });
//     });
// });


 $(function loadData() {
     var location = [];

     $.getJSON('data.json', function(data) {
           

        var items = [],
        $ul;

        $.each(data, function (key, val) {
            items.push(`<li id="${key}"><span class="image">${val.mediaurl}</span><br><span class="location-title">${val.title}</span> <span class="location-tital">${val.description}</span></li>`);
        });

          // append list to page
          $ul = $('<ul />').appendTo('.content');
 
          //append list items to list
          $ul.append(items);
    });
});


window.onload = loadData;

//I don't know anything about API's/loading data from them, gave it my best shot!