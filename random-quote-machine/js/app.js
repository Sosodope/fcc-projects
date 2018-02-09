$('.btn').click(function(){
  $('.content').text('Prepare to be inspired');
  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/quotes/search.json?q=inspiration&restrict_sr=true",
    success: function(response){
      $('.content').html('');
      for(var i = 0; i < response.data.children.length; i++){
        var quotesLength = response.data.children.length;
        var randomNum = Math.floor(Math.random()*quotesLength);
        var quote = "<p>" + response.data.children[randomNum].data.title + "</p>";
        $('.content').html(quote);
      }
    },
  });
});

function tweetQuote() {
	var phrase = document.getElementById('quote').innerText;
	var tweetUrl = "https://twitter.com/share?text=" +
	encodeURIComponent("'" + phrase + "'");
	window.open(tweetUrl);
}