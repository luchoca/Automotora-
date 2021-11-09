// // Carga de Tipo de Cambio:
// // $.ajax({
// //   url: "https://ha.edu.uy/api/rates",
// //   success: function (data) {
// //     $("#rate span").text(data.uyu);
// //   },
// // });

// // https://ha.edu.uy/api/cars autos AJAX

// // https://ha.edu.uy/api/brands  marcas AJAX

// // https://ha.edu.uy/api/models?brand=Audi modelos AJAX

// //VUE

// var salesapp = new Vue({
//   el: "#sales",
//   data: {
//     exchangeRate: 0,
//     years: [],
//     slecetdYear: "",
//     brands: [],
//     selectedBrand: "",
//     models: [],
//     selectedModel: "",
//   },
// });

// // llamada ajax para el cambio de moneda
// $.ajax({
//   url: "https://ha.edu.uy/api/rates",
//   success: function (rates) {
//     salesapp.exchangeRate = rates.uyu;
//   },
// });

// // anios para el filtro con vue

// for (var i = 2021; i >= 1900; i--) {
//   salesapp.years.push(i);
// }

// //marcas
// $.ajax({
//   url: "https://ha.edu.uy/api/brands",
//   success: function (brands) {
//     salesapp.brands = brands;
//   },
// });

// // $.ajax({
// //   url: "https://ha.edu.uy/api/models?brand=Acura",
// //   success: function (models) {
// //     salesapp.models = models.audi;
// //   },
// // });

// //modelos

// $("#brand").on("change", function () {
//   $.ajax({
//     url: "https://ha.edu.uy/api/models?brand=" + salesapp.selectedBrand,
//     success: function (models) {
//       salesapp.models = models;
//     },
//   });
// });

// $("#filter").on('click', function(){
//     $.ajax({
//         url:
//     })
// })

// Carga de Tipo de Cambio:
// $.ajax({
//     url: "https://ha.edu.uy/api/rates",
//     success : function (data) {
//         $("#rate span").text(data.uyu);
//     }
// });
// Vue
var salesApp = new Vue({
  el: "#sales",
  data: {
    exchangeRate: 0,
    years: [],
    selectedYear: "",
    brands: [],
    brandSelected: "",
    models: [],
    selectedModel: "",
    selectedState: "",
    cars: [],
  },
});
//Rates
$.ajax({
  url: "https://ha.edu.uy/api/rates",
  success: function (rates) {
    $("rate span").text(rates.uyu);
    salesApp.exchangeRate = rates.uyu;
  },
});
//Brands
$.ajax({
  url: "https://ha.edu.uy/api/brands",
  success: function (brands) {
    salesApp.brands = brands;
  },
});
//Brand
$("#brand").on("change", function () {
  $.ajax({
    url: "https://ha.edu.uy/api/models?brand=" + salesApp.brandSelected,
    success: function (models) {
      salesApp.models = models;
    },
  });
});
//Selected Brand
for (var i = 1900; i <= 2021; i++) {
  salesApp.years.push(i);
}
$("#filtrar").on("click", function () {
  $.ajax({
    url:
      "https://ha.edu.uy/api/cars?year=" +
      salesApp.selectedYear +
      "&brand=" +
      salesApp.brandSelected +
      "&model=" +
      salesApp.selectedModel +
      "&status=" +
      salesApp.selectedState,
    success: function (resultado) {
      salesApp.cars = resultado;
    },
  });
});
