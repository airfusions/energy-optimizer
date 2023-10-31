// Sample dataset (you can replace this with your actual data)
const consumptionData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            label: "Electrical Consumption",
            data: [500, 600, 550, 700, 750, 800],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
        },
    ],
};

// Create a chart
const ctx = document.getElementById("consumptionChart").getContext("2d");
const consumptionChart = new Chart(ctx, {
    type: "line",
    data: consumptionData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
