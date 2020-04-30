const alfy = require('alfy');
const opn = require('opn');
const fs = require('fs');
const data = require('./data.json');

switch(process.argv[3]){
    case "fly_filter":
        fly_filter();
        break;

    case "fly_process":
        fly_process();
        break;

    case "add_filter":
        add_filter();
        break;

    case "add_process":
        add_process();
        break;

    case "delete_process":
        delete_process();
        break;

    default:
        throw new Error("Unknown Ask");
}

function fly_filter(){

    if(data.length === 0){
        alfy.output([{
            title: "No sites added",
            subtitle: "Add a new site via: 'fly-add {site} {sub} {url}'",
            arg: 0
        }]);
        return;
    }

    // Reorganize the array into a format that is searchable by alfred
    const reorg = data.map(element => ({
        search: `${element.site} ${element.sub}`,
        sub: element.sub,
        url: element.url,
        original: element
    }));

    // Find matches and then sort them alphabetically
    let items = alfy.inputMatches(reorg, 'search')
        .sort(function(a, b) {
            var textA = a.sub.toUpperCase();
            var textB = b.sub.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        })
        .map(element => ({
            title: element.sub,
            subtitle: element.url,
            arg: JSON.stringify(element)
        }));

    // Return items
    alfy.output(items);
}

function fly_process(){
    const input = JSON.parse(alfy.input);
    opn(input.url);
}

function add_filter(){
    const input = alfy.input.split(" ");
    if(input.length !== 3){
        alfy.output([{
            title: "Unparseable",
            subtitle: "Input must be in the format: 'fly-add {site} {sub} {url}'",
            arg: 0
        }]);
    } else {
        alfy.output([{
            title: `Adding new site: ${input[0]} ${input[1]}`,
            subtitle: `with url: ${input[2]}`,
            arg: JSON.stringify({ site: input[0], sub: input[1], url: input[2] })
        }]);
    }
}

function add_process(){
    const input = JSON.parse(alfy.input);
    data.push(input);
    fs.writeFileSync('data.json', JSON.stringify(data));
}

function delete_process(){
    let input = JSON.parse(alfy.input);
    input = input.original;

    let i=0;
    for(let item of data){
        console.log(item);
        if(item.url === input.url && item.sub == input.sub && item.site == input.site){
            data.splice(i, 1);
            break;
        }
        i++;
    }

    fs.writeFileSync('data.json', JSON.stringify(data));
}