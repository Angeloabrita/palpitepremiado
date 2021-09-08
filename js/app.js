class RandNumer{
    /** This class create random number  with *minRange* and *maxRange* behind set the number of return arrays */ 
    constructor( minRange,maxRange, numberOfRand = 3){
        this._numberOfRand = numberOfRand;
        this._minRange = minRange;
        this._maxRange = maxRange;
    }

     ReturnOnlyNumer() {
        
       return Math.floor(Math.random() * this._maxRange) + this._minRange;

    }
     ReturnArrayNumber(){
         let listOfRand = [];

         for (let i = 0; i < this._numberOfRand; i++){
             
            listOfRand.push(Math.floor(Math.random() * this._maxRange) + this._minRange);
         }
         return listOfRand;
     }

}


var rand = new RandNumer(1,60,6)
var val = document.getElementById('showValue');
function showNumber(tipo) {
    
    if(tipo =='mega'){ 
        rand._numberOfRand = 6;
        rand._maxRange = 60;
        val.innerHTML ='<h2 class="awardTxt">SEU NUMERO DA SORTE É </h2>';
        rand.ReturnArrayNumber().forEach(drawValue);
         console.log(rand.ReturnArrayNumber());  
    }

    else if(tipo == 'quina'){
        val.innerHTML ='<h2 class="awardTxt">SEU NUMERO DA SORTE É </h2>';
        rand._numberOfRand = 5;
        rand._maxRange =80;

        rand.ReturnArrayNumber().forEach(drawValue);
        console.log(rand.ReturnArrayNumber());

    }
   
}

/**Draw values from rand in **numberCointainer** css */
function drawValue(item) {

    val.innerHTML += ' <div class="numberContainer"><h2>'+ item +'</h2></div>';   
    //animateValue('showValue', 0, item, 5000);


} 


function addTable() {
  
    var inMin = document.getElementById('rangeMin').value;
        inMax = document.getElementById('rangeMax').value;
        row = document.getElementById('TotalLines').value;
        col = document.getElementById('totalColun').value;
  console.log(typeof(inMin) , inMax);
  var table = document.createElement('TABLE');
  table.border = '1';

  var randi = new RandNumer(parseInt(inMin), parseInt(inMax));
  console.log(randi.ReturnOnlyNumer());
  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < row; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < col; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode(randi.ReturnOnlyNumer()));
      tr.appendChild(td);
      
    }
  }
  val.appendChild(table);
}




//actions for modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("ale");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
