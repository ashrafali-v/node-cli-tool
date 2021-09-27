exports.stringToAlternateUpperCase = (userinput) =>{
    var alternateCapArray =[];
    userinput.split('').forEach((element,index) => {
        alternateCapArray.push((index-1)%2 == 0?element.toUpperCase():element);
    });
    return alternateCapArray.join('');
}