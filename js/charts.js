const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'KW/H of usage this day',
            data: [6, 3, 3, 5, 4, 8, 7],
            borderColor: '#fff',
            borderWidth: 2

        },
        {
            label: 'KW/H light consumption',
            data: [4, 2.5, 2, 3.5, 3, 5, 4],
            borderColor: '#ff1',
            borderWidth: 2
        },
        {
            label: 'KW/H heater consumption',
            data: [2, .5, 1, 1.5, 1, 3, 3],
            borderColor: '#f1f',
            borderWidth: 2
        }],

    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const pie = document.getElementById('PieChart');

pC = [[6, 3, 3, 5, 4, 8, 7],[4, 2.5, 2, 3.5, 3, 5, 4],[2, .5, 1, 1.5, 1, 3, 3]];

new Chart(pie, {
    type: 'pie',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'KW/H of usage this day',
            data: [pC[0][0],pC[0][1],pC[0][2],pC[0][3],pC[0][4],pC[0][5],pC[0][6]],
            borderColor: '#fff',
            backgroundColor: '#bbb',
            borderWidth: 2

        },
        {
            label: 'KW/H light consumption',
            data: [pC[1][0],pC[1][1],pC[1][2],pC[1][3],pC[1][4],pC[1][5],pC[1][6]],
            borderColor: '#ff1',
            backgroundColor: '#bb1',
            borderWidth: 2
        },
        {
            label: 'KW/H heater consumption',
            data: [pC[2][0],pC[2][1],pC[2][2],pC[2][3],pC[2][4],pC[2][5],pC[2][6]],
            borderColor: '#f1f',
            backgroundColor: '#b1b',
            borderWidth: 2
        }],

    }
});

let iets = 0;

for (let i = 0; i < pC[0].length; i++) {
    let verbruik = pC[0][i]*3;
    iets = iets + verbruik
    document.getElementById("pricecalc").innerHTML = document.getElementById("pricecalc").innerHTML +"\n"+ verbruik+" Euro";
}

document.getElementById("pricetotal").innerHTML = "totaal: "+iets+" Euro";