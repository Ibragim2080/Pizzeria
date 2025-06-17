
// function calculate() {
//     const dataStr = document.getElementById("dataInput").value;
//     const alpha = parseFloat(document.getElementById("alphaInput").value);
  
//     // Парсим входные данные
//     const data = dataStr.split(',').map(Number);
//     if (data.some(isNaN)) {
//       alert("Проверьте данные — они должны быть числами!");
//       return;
//     }
  
//     if (alpha < 0 || alpha > 1) {
//       alert("α должно быть от 0 до 1");
//       return;
//     }
  
//     const forecast = [];
//     let S = data[0]; // начальное значение сглаженной величины
  
//     for (let i = 0; i < data.length; i++) {
//       S = alpha * data[i] + (1 - alpha) * S;
//       forecast.push(S);
//     }
  
//     // Прогноз на следующий период
//     const nextForecast = alpha * data[data.length - 1] + (1 - alpha) * S;
  
//     // Вывод результата
//     const output = `
//   Входные данные: [${data.join(", ")}]
//   Сглаженные значения: [${forecast.map(f => f.toFixed(2)).join(", ")}]
//   Прогноз на следующий период: ${nextForecast.toFixed(2)}
//     `;
  
//     document.getElementById("output").textContent = output;
//   }




{/* <script>
        function calculateForecast() {
            // Получаем введенные значения
            const w1 = parseFloat(document.getElementById('week1').value);
            const w2 = parseFloat(document.getElementById('week2').value);
            const w3 = parseFloat(document.getElementById('week3').value);
            const w4 = parseFloat(document.getElementById('week4').value);

            // Проверка на корректность ввода
            if (isNaN(w1) || isNaN(w2) || isNaN(w3) || isNaN(w4)) {
                alert("Пожалуйста, заполните все поля числами.");
                return;
            }

            const salesData = [w1, w2, w3, w4];

            // Простой линейный прогноз (средний рост между неделями)
            const growth = [
                w2 - w1,
                w3 - w2,
                w4 - w3
            ];
            const avgGrowth = growth.reduce((a, b) => a + b, 0) / growth.length;

            const forecast1 = Math.round(w4 + avgGrowth);
            const forecast2 = Math.round(forecast1 + avgGrowth);

            const ctx = document.getElementById('salesChart').getContext('2d');
            const chartExists = Chart.getChart(ctx); // Проверяем, есть ли уже график

            if (chartExists) {
                chartExists.destroy();
            }

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Неделя 1', 'Неделя 2', 'Неделя 3', 'Неделя 4', 'Прогноз 1', 'Прогноз 2'],
                    datasets: [{
                        label: 'Проданные пиццы',
                        data: [...salesData, forecast1, forecast2],
                        borderColor: '#d62828',
                        backgroundColor: 'rgba(214, 40, 40, 0.2)',
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    responsive: false,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            document.getElementById('salesChart').style.display = 'block';
            document.getElementById('forecastResult').textContent =
                `Прогноз на следующие 2 недели: ${forecast1} и ${forecast2} пицц`;
        }
    </script> */}