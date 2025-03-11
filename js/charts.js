
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
