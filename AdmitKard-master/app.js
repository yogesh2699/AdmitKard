// const express = require("express");

// const app = express();
// app.use(express.static("public"));

// app.get("/", (req, res) => {});

// $("telephone").intlTelInput({
//   utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js",
// });

// $("#telephone").intlTelInput({
//   // options here
//   utilsScript: "build/js/intlTelInput-jquery.min.js",
// });

$("#mobile-number").intlTelInput();

// var obj = document.getElementById("partitioned");
// obj.addEventListener("keydown", stopCarret);
// obj.addEventListener("keyup", stopCarret);

// function stopCarret() {
//   if (obj.value.length > 3) {
//     setCaretPosition(obj, 3);
//   }
// }

// moveOnMax = function (field, nextFieldID) {
//   if (field.value.length == 1) {
//     document.getElementById(nextFieldID).focus();
//   }
// };

$("#otp1").keyup(function () {
  if ($(this).val().length >= 1) {
    $("#otp2").show();
    $("#otp2").focus();
  }
});

$("#otp2").keyup(function () {
  if ($("#otp1").val.length >= 1) {
    $("#otp3").show();
    $("#otp3").focus();
  }
});

$("#otp3").keyup(function () {
  if ($(this).val().length >= 1) {
    $("#otp4").show();
    $("#otp4").focus();
  }
});

promt = function showPromt() {
  alert("Successfully verified");
};
