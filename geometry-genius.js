
//Triangle Area
function triangleArea(){
    //get triangle base
    let triangleBase = document.getElementById('triangle-base').value;
    triangleBase = parseFloat(triangleBase);
    document.getElementById('triangle-base').value = '';
    // console.log('base is :', triangleBase);

    //get triangle Height
    let triangleHeight = document.getElementById('triangle-height').value;
    triangleHeight = parseFloat(triangleHeight);
    document.getElementById('triangle-height').value = ' ';
    // console.log('heiht is : ', triangleHeight);

    //calculate area
    let area = 0.5 * triangleBase * triangleHeight;
    // console.log('Triangle area is :', area);

    // display area
    let triangleArea = document.getElementById('display-area');
    triangleArea.innerText ='Triangle arear is : ' + area;

}

//ellipse-area

function ellipseArea(){

    // get ellipse a value  
    let ellipseA = document.getElementById('ellipse-a').value;
    ellipseA = parseFloat(ellipseA);
    document.getElementById('ellipse-a').value = '';
    console.log(ellipseA);
    
    // get ellipse b value 
    let ellipseB = document.getElementById('ellipse-b').value;
    ellipseB = parseFloat(ellipseB);
    document.getElementById('ellipse-b').value = '';
    console.log(ellipseB);

    //calculate ellipse area
    let areaOfEllipse = 3.1416 * ellipseA * ellipseB;
    console.log(areaOfEllipse);
    
    //display ellipse area
    let triangleArea = document.getElementById('display-area');
    triangleArea.innerText ='Ellipse arear is : ' + areaOfEllipse;
}

///*************************************** *
//use function 

///Rectangle

// get input
function getInputById(inputText){
    let inputValue = document.getElementById(inputText).value;
    inputValue = parseFloat(inputValue);
    return inputValue;
}

//display area
function dispalyArea(area){

    let elemented = document.getElementById('display-area');
    elemented.innerText =  area;
}


//claculate rectangle area
function rectangleArea(){
   let base = getInputById('rectangle-base');
   let height = getInputById('rectangle-height');


let area = base  * height;
dispalyArea('Rectangle area is : '+ area);

}

//claculate area parallelogram
function parallelogramArea(){
    let base = getInputById('parallelogram-bash');
    document.getElementById('parallelogram-bash').value = '';
    let height = getInputById('parallelogram-height');
    document.getElementById('parallelogram-height').value = '';


    let area = base * height;

    dispalyArea('Parallelogram area is : '+ area);
}

