### Parse It!
Parse a CSV formatted input into a formatted String in ES6 [http://es6-features.org]

Input:

    Lead Chef, Chipotle, Denver, CO, 10, 15
    Stunt Double, Equity, Los Angeles, CA, 15, 25
    Manager of Fun, IBM, Albany, NY, 30, 40
    Associate Tattoo Artist, Tit 4 Tat, Brooklyn, NY, 250, 275
    Assistant to the Regional Manager, IBM, Scranton, PA, 10, 15
    Lead Guitarist, Philharmonic, Woodstock, NY, 100, 200
        
Expected Output:

    All Opportunities
    Title: Assistant to the Regional Manager, Organization: IBM, Location: Scranton, PA, Pay: 10-15
    Title: Associate Tattoo Artist, Organization: Tit 4 Tat, Location: Brooklyn, NY, Pay: 250-275
    Title: Lead Chef, Organization: Chipotle, Location: Denver, CO, Pay: 10-15
    Title: Lead Guitarist, Organization: Philharmonic, Location: Woodstock, NY, Pay: 100-200
    Title: Manager of Fun, Organization: IBM, Location: Albany, NY, Pay: 30-40
    Title: Stunt Double, Organization: Equity, Location: Los Angeles, CA, Pay: 15-25

#### Requirements
Ensure the following is installed:
* Node https://nodejs.org/en/download/
* In Terminal, run `node -v` to check if installed

#### Install
Then run the following commands:
* `git clone https://github.com/AliceWonderland/parse-it.git`
* `npm install`

#### Run
* `npm run parse`