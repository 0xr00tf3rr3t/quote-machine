var displayData = "";

$(document).ready(function () {
        getQuote();

        $("#getQuote").on("click", function(){ getQuote() ;});
        function getQuote() {
                $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function (json) {
                        var quote = json.quoteText;
                        var author = json.quoteAuthor;
                        if (author=="")
                        {
                                author="Unknown";
                        }
                        $("#quote").html(quote);
                        $("#author").html(author);
                        
                        $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + quote.slice(0,139)).attr('target', '_blank');
                });
        }

});