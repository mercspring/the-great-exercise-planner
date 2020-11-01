// alert("linked")


//collect data for add exercise button
//Handler for the add exercise button
$(".add-exercise-btn").on("click", function (event) {
    event.preventDefault()
    const typeSelector = $("<select class='type'>")
    typeSelector.append("<option value='Lifting'>Lifting</option> <option value='Cardio'>Cardio</option> <option value='Other'>Other</option>")
    const addButton = $("<button class='add-btn'> Add Exercise</button>")


    // console.log("clicked")
    $(this).parent().append([typeSelector, addButton]);
    typeSelector.parent().prepend("<label for='type'>Type:</label>")
    $(this).remove();

})

$(document).on("change", ".type", function (event) {
    console.log("selected")
    const name = new Input("name");
    const duration = new Input("duration");
    const distance = new Input("distance");
    const reps = new Input("reps");
    const sets = new Input("sets");
    const weight = new Input("weight");
    if ($(this).val() === "Cardio") {
        $(this).parent().children(".exercise-info").remove()
        $(this).parent().append([name.line, duration.line, distance.line])
    } else if ($(this).val() === "Lifting") {
        $(this).parent().children(".exercise-info").remove()
        $(this).parent().append([name.line, reps.line, weight.line, sets.line, duration.line])
    } else if ($(this).val() === "Other") {
        $(this).parent().children(".exercise-info").remove()
        $(this).parent().append([name.line, reps.line, weight.line, sets.line, duration.line, distance.line])
    }
})

function Input(inputName) {
    this.label = $(`<label for='exercise-${inputName}'> ${inputName.charAt(0).toUpperCase() + inputName.slice(1)}: </label>`)
    this.input = $(`<input type='text' class='exercise-${inputName}'>`)
    this.line = $(`<div class='exercise-info'>`).append(this.label, this.input)
}
$(document).on("click", ".add-btn", function (event) {
    const data = {
        name: $(this).siblings().children(".exercise-name").val(),
        duration: $(this).siblings().children(".exercise-duration").val(),
        distance: $(this).siblings().children(".exercise-distance").val(),
        reps: $(this).siblings().children(".exercise-reps").val(),
        sets: $(this).siblings().children(".exercise-sets").val(),
        weight: $(this).siblings().children(".exercise-weight").val(),
        type: $(this).siblings(".type").val(),
    };
    $.ajax({
        method: "POST",
        url: "/api/exercises/" + $(this).parent().attr("data-id"),
        data: data
    }).then(function (result) {
        console.log(result);
    })
});


//Handler for the add workout button

