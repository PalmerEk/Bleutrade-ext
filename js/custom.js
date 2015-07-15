/*
// Prepare server side templates
$().ready(function() {
  templates = {}
  $("#templateContainer > [type='text/tmpl']").each(function(idx,el) {
  	console.log('loading template: ' + $(el).html())

    templates[$(el).attr("id")] = swig.compile($(el).html(), { filename: $(el).attr("id") });
    
    $(el).remove();
  });
});
*/

$().ready(function() {
	var bleutrade = new BleutradeAPI("YOUR-KEY-FOR-PRIVATE-FUNCTIONS", "YOUR-SECRET-FOR-PRIVATE-FUNCTIONS");

	bleutrade.getmarketsummaries(function(err, summaries) {
	    if(err) return;

	    if(summaries.success) {
	        summaries.result.forEach(function(market) {
	        	console.log(market.MarketName, market.Low, market.High, market.Volume);
	        	//$('#summary').append($(templates._summaryRow({market: market})));
	        })
	    }
	});
});


