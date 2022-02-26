// Date :-
document.getElementById("time").innerHTML = Date()

var sum = 0

// Mobile Number validation

document.getElementById("btn").addEventListener("click", function (e) {
  var invalidMobile = document.getElementById('inputMobile').value
  var validMobile = /^[6-9]\d{9}$/

  if (validMobile.test(invalidMobile)) {
    document.getElementById("errMobile").innerHTML = ""
  } else {
    document.getElementById("errMobile").innerHTML = "* Please inter the valid Number"
  }

  var name = $("#name").val();
  var fname = $("#fname").val();
  var Address = $("#Address").val();
  var inputMobile = $("#inputMobile").val();
  var product = $("#product").val();
  var price = $("#price").val();
  var Deposit = $("#Deposit").val();

  var priceInput = parseInt(document.getElementById("price").value)

    if(isNaN(priceInput)){
        e.preventDefault()
        document.getElementById("errPrice").innerHTML = "* Please inter the amount"
    }else{
      sum += priceInput
      document.getElementById("total").innerHTML = sum
      document.getElementById("errPrice").innerHTML = ""
    }
  

  if (name > "0" || fname > "0" || Address > "0" || inputMobile > "0" || product > "0" || price >= "0" || Deposit > "0") {

    var newtable = `<tr >
           <td class="close">${name}</td>
           <td>${fname}</td>
           <td>${Address}</td>
           <td>${inputMobile}</td>
           <td>${product}</td>
           <td>${price}</td>
           <td>${Deposit}</td>
           <td><button class="btnClose" style="color: red;">X</button></td>
          </tr>`
  }

  $("#table").prepend(newtable);
  $("input").val('')

  $(".btnClose").click(function() {
    $(this).parentsUntil('table').remove()
    // console.log(  $(".close").parent())
  })
  $("td").css("border-width","1")
})

