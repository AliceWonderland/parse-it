// parse jobs
// parse a string input
// output formatted str result
// Use Arrays

export default class Parser{
    constructor(input,keys){
        this.input = input;
        this.keys = keys;
        this.output = null;
    }

    // undefined, empty, \n, comma?
    check(){
        let input = this.input;
        let keys = this.keys;
        if(!input || !input.length || input.indexOf('\n') < 0 || input.indexOf(',') < 0 || !keys){
            return false;
        }
        // check for 5 commas?
        // trim?
        return true;
    }

    load(){
        let input = this.input;
        let result = [];
        if(this.check()){
            result = input.split('\n');
            result = result.map(item => item.split(',') );
            return result;
        }
        return false;
    }

    sort(direction = 'asc', input = null){
        if(!input) return false;
        if(direction === 'asc'){
            return input.sort((a,b) => a[0].toLowerCase() > b[0].toLowerCase());
        }else{
            return input.sort((a,b) => a[0].toLowerCase() < b[0].toLowerCase());
        }
    }

    createObj(input = null){
        if(!input) return false;
        let keys = this.keys;
        return input.map(item => {
            let obj = {};
            obj[keys[0]] = item[0];
            obj[keys[1]] = item[1];
            obj[keys[2]] = item[2] + ', ' + item[3];
            obj[keys[3]] = item[4] + '-' + item[5];
            return obj;
        })
    }

    createStr(input = null){
        if(!input) return false;
        let keys = this.keys;
        let header = "All Opportunities\n";
        input = input.map(item => {
            let str = '';
            str += `${keys[0]}: ${item[0]}, `;
            str += `${keys[1]}: ${item[1]}, `;
            str += `${keys[2]}: ${item[2]}, ${item[3]}, `;
            str += `${keys[3]}: ${item[4]}-${item[5]}`;
            return str;
        })
        .join('\n');
        return header += input;
    }
}