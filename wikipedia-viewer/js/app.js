var displayWikiData = function(){
	var searchString = $("#search-string").val();
	var wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&format=json&callback=wikiCallback";
	var linksElement = $("#links");
	$.ajax({
		url: wikiUrl,
		method: "GET",
		dataType: "jsonp", 
		jsonp: "callback",
		success: function(response){
			var linkLists = response[1];
			var excerpts = response[2];
			$('.link').html('');
			linkLists.forEach(function(item){
				var url = 'https://en.wikipedia.org/wiki/' + item;
				linksElement.append('<li><a href="' + url + '" target="_blank">' + item + '</a>' + '</li>');
				linksElement.append('<p class="excerpts">' + excerpts + '</p>');
				$("#form")[0].reset();
				return url;
			});
		}
	});

	return false;
}


$('#form').submit(displayWikiData);
