
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.ticketPrice = function() {
  return this.movie + this.time + this.age;
}



$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();
    var movieInput = parseInt($(".movie").val());
    var timeInput = parseInt($(".time").val());
    var ageInput = parseInt($(".age").val());
    var newTicket = new Ticket(movieInput, timeInput, ageInput);
     console.log(newTicket);
     $("#output").text("$" + newTicket.ticketPrice());
  })
})
