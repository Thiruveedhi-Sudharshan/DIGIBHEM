function calculateTotalCost(event) {
    event.preventDefault(); // Prevent form submission

    var roomRates = {
      deluxe: 2500,
      suite: 4000,
      AC: 1000,
      locker: 300
    };

    var customerName = document.getElementById("customerName").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var totalDays = parseInt(document.getElementById("totalDays").value);
    var totalPersons = parseInt(document.getElementById("totalPersons").value);
    var roomType = document.getElementById("roomType").value;
    var amenitiesAC = document.getElementById("amenitiesAC").checked;
    var amenitiesLocker = document.getElementById("amenitiesLocker").checked;
    var advancePayment = parseInt(document.getElementById("advancePayment").value);

    var totalCost = roomRates[roomType] * totalDays;
    if (amenitiesAC) {
      totalCost += roomRates.AC;
    }
    if (amenitiesLocker) {
      totalCost += roomRates.locker;
    }
    if (totalPersons > 2) {
      var additionalPersons = totalPersons - 2;
      var additionalCharges = additionalPersons * 1000 * totalDays;
      totalCost += additionalCharges;
    }

    var balanceAmount = totalCost - advancePayment;

    document.getElementById("balanceAmount").value = balanceAmount;
    document.getElementById("totalCost").value = totalCost;
    alert("Booking Successful");
  }