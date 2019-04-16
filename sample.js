import Parser from './parser';

var keys = ['Title', 'Organization', 'Location', 'Pay'];
var input = "Lead Chef, Chipotle, Denver, CO, 10, 15\n" +
    "Stunt Double, Equity, Los Angeles, CA, 15, 25\n" +
    "Manager of Fun, IBM, Albany, NY, 30, 40\n" +
    "Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275\n" +
    "Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15\n" +
    "Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200";

// expected output
// All Opportunities
// Title: Assistant to the Regional Manager, Organization: IBM, Location: Scranton, PA, Pay: 10-15
// Title: Associate Tattoo Artist, Organization: Tit 4 Tat, Location: Brooklyn, NY, Pay: 250-275
// Title: Lead Chef, Organization: Chipotle, Location: Denver, CO, Pay: 10-15
// Title: Lead Guitarist, Organization: Philharmonic, Location: Woodstock, NY, Pay: 100-200
// Title: Manager of Fun, Organization: IBM, Location: Albany, NY, Pay: 30-40
// Title: Stunt Double, Organization: Equity, Location: Los Angeles, CA, Pay: 15-25

var result = new Parser(input, keys);
console.log(
    result.createStr( result.sort('asc', result.load() ) )
);