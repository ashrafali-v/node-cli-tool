exports.stringToAlternateUpperCase = (userinput) =>{
    var alternateCapArray =[];
    userinput.split('').forEach((element,index) => {
        alternateCapArray.push((index-1)%2 == 0?element.toUpperCase():element);
    });
    //process.stdout.write(alternateCapArray.join('') + '\n');
    return alternateCapArray.join('');
}