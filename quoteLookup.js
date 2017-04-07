var displayData = "";

$(document).ready(function () {
        getQuote();

        $("#getQuote").on("click", function(){ getQuote() ;});
        function getQuote() {
                $("#quote").html('<i class="fa fa-refresh fa-spin" style="font-size:50px">');
                $("#author").html('');
                $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function (json) {
                        var quote = json.quoteText;
                        var author = json.quoteAuthor;
                        if (author=="")
                        {
                                author="Unknown";
                        }
                        $("#quote").html(quote);
                        $("#author").html(author);
                        console.log(quote.length);
                        if (quote.length >=140)
                                {
                                        $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + quote.slice(0,135)+"...").attr('target', '_blank');
                                }
                      else {
                                $('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + quote).attr('target', '_blank');
                      }          
     });
        }

});