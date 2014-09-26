var newsweekDataUrl = "../newsweek_highschool_2013.json";

var newsweekData,
    startup = function(){
        var q = $.Deferred();
        $.getJSON( newsweekDataUrl)
            .done(function(data){
                newsweekData = data;
                q.resolve(data)
            });
        return q;
    },
    renderData = function(data){
        var template = _.template($('script#ranking-template').html());
        newsweekData = data;
        var njData = [];
        newsweekData.results.forEach(function(item, i){
            if (item.state == 'NJ') njData.push(item);
        });
        $('#page-content').html(template({items: njData}))
    };

$(
    function(){
        startup().then(renderData, function(){console.log('error occurred')});
        console.log('ready');
    }
);