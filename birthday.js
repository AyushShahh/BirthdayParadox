let people = document.getElementById("people");
paradox();

function paradox() {
    if(people.value > -1){
        pairs = (people.value)*(people.value - 1)/2;
        chance_per_pair = (people.value-1)*(people.value)/730;
        chance_pair = (2.718281828459045)**(-chance_per_pair);
        chance = (100 - (chance_pair*100)).toFixed(4);

        document.getElementById("show").innerHTML = "<br>Number of pairs: <b>" +pairs+ "</b><br>Average number of matching pairs: <b>" +(chance_per_pair).toFixed(4)+ "</b><br>Chance of 2 people in the room having same birthday: <b>"+chance+"%</b>";    
    }
    
    else{
        document.getElementById("show").innerHTML = "<br>Number of people cannot be negative";
    }
}

function reset() {
    people.value = '';
    pairs = 0;
    chance = 0.0000;
    chance_per_pair = 0.0000;
    paradox();
}

let exp1 = "100-(2.718281828459045**((x-x**2)/730))*100";
let exp2 = "(2.718281828459045**((x-x**2)/730))*100";

const xValues = [];
const yValues = [];
const y1Values = [];

for (let x = 0; x <= 110; x += 1) {
  xValues.push(x);
  yValues.push(eval(exp1));
}

for (let x = 0; x <= 110; x += 1) {
  xValues.push(x);
  y1Values.push(eval(exp2));
}

const data = [{
x: xValues,
y: y1Values,
mode:"lines",
line:{color:'blue'},
name:'Chance of no match'},
{x: xValues,
y: yValues,
mode:"lines",
line:{color:'red'},
name:'Chance of match'}
];

const layout = {
    title: {
      text:'Visualization data plot',
      font: {
        size: 24
      },
    },  
    xaxis: {
        title: {
          text: 'Number of people',
          font: {
            size: 20
          },
        },
      },
    yaxis: {
        title: {
          text: 'Chance of match (in %)',
          font: {
            size: 20
          },
        }
    }
};

Plotly.newPlot("myPlot", data, layout, {displaylogo: false});