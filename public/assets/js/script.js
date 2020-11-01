// alert("linked")


//collect data for add exercise button
//Handler for the add exercise button
$(".add-exercise-btn").on("click", function(event){
    event.preventDefault()
//     const typeSelector = $("<select id='type'>")
//     typeSelector.append("<option value='Lifting'>Lifting</option> <option value='Cardio'>Cardio</option> <option value='Other'>Other</option>")

// console.log("clicked")
    $(this).parent().parent().append(typeSelector);
    typeSelector.parent().prepend("<label for='type'>Type:</label>")
    $(this).remove();

})

$(document).on("change", "#type", function(event){
    console.log("selected")
if($(this).val() === "Cardio"){
    $("#add-exercise").clear();    
    $("#add-exercise").append("<label for='exercise-name'> Name:</label><input type='text' id='exercise-name'>")
    $("#add-exercise").append("<label for='exercise-duration'> Name:</label><input type='text' id='exercise-name'>")
    $("#add-exercise").append("<label for='exercise-distance'> Name:</label><input type='text' id='exercise-name'>")
} else if($(this).val() === "Lifting"){
    $("#add-exercise").clear();    
    $("#add-exercise").append("<label for='exercise-name'> Name:</label><input type='text' id='exercise-name'>")
    $("#add-exercise").append("<label for='exercise-weight'> Weight:</label><input type='text' id='exercise-name'>")
    $("#add-exercise").append("<label for='exercise-reps'> Reps:</label><input type='text' id='exercise-name'>")
    $("#add-exercise").append("<label for='exercise-sets'> Sets:</label><input type='text' id='exercise-name'>")
    $("#add-exercise").append("<label for='exercise-duration'> Duration:</label><input type='text' id='exercise-name'>")
}
})
// $.ajax({
//     method: "POST",
//     url: "/api/",
//     data:{}
// })

//Handler for the add workout button

