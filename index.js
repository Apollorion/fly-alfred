const alfy = require('alfy');
const opn = require('opn');
const fs = require('fs');

const username = require("os").userInfo().username
let rawdata = fs.readFileSync(`/Users/${username}/Library/Application Support/Google/Chrome/Default/Bookmarks`);
let data = JSON.parse(rawdata);
data = data.roots.bookmark_bar.children;

switch(process.argv[3]){
    case "fly_filter":
        fly_filter();
        break;

    case "fly_process":
        fly_process();
        break;

    default:
        throw new Error("Unknown Ask");
}

function fly_filter(){

    if(data.length === 0){
        alfy.output([{
            title: "No sites bookmarked",
            subtitle: "No sites in google chrome bookmarks",
            arg: 0
        }]);
        return;
    }

    // Reorganize the array into a format that is searchable by alfred
    const reorg = reorganize_for_alfred(data);

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

function reorganize_for_alfred(data, folder_name=undefined){
    let newData = []

    for(let item of data){
        if(item.type === "folder"){
            let fname = folder_name + "/" + item.name
            if(folder_name === undefined){
                fname = item.name;
            }

            let org2 = reorganize_for_alfred(item.children, fname);
            newData = [...newData, ...org2];
        } else if(item.type === "url"){
            let fname = folder_name + " " + item.name
            if(folder_name === undefined){
                fname = item.name;
            }

            newData.push({
                search: fname,
                sub: item.name,
                url: item.url
            });
        }
    }

    return newData;
}

function fly_process(){
    const input = JSON.parse(alfy.input);
    opn(input.url);
}