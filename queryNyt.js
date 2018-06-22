// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

var query = '';
var beginDate = '20180601';
var endDate = '20180602';
var pageNum = 10;
var totalPosts = 5;

url += '?' + $.param({
  'api-key': "f781a6c51fa0459ab6a52e0509396110",
  'q': query,
  'begin_date': beginDate,
  'end_date': endDate,
  'page':pageNum 
});

var posts = $.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  return result;
}).fail(function(err) {
  throw err;
});


function getPostUrls(results) {
  var postUrls = posts.then(function (allPosts) {
    var fivePosts = [];
    for (var i = 0; i < results; i++) {
      fivePosts.push((allPosts.response.docs[i].web_url));
    }

    return fivePosts;
  });

  postUrls.then(function (urls) {
    console.log(urls);
  })
  console.log(results);
}

function getPostHeadlines(results) {
  var postUrls = posts.then(function (allPosts) {
    var fivePosts = [];
    for (var i = 0; i < results; i++) {
      fivePosts.push((allPosts.response.docs[i].headline.main));
    }

    return fivePosts;
  });

  postUrls.then(function (urls) {
    console.log(urls);
  })
  console.log(results);
}

getPostUrls(totalPosts);
getPostHeadlines(totalPosts);
