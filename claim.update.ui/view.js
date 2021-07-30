var claimData = [];

function getAllClaims() {
    let start = performance.now();
    $.get('http://localhost:9191/fetch/claims', function(data) {
        var str = '<select id="id" class="form-select form-select-lg mb-3">';
        data.forEach(element => {
            str += "<option value='" + element.id + "'>" + element.fsd0005 + "</option>";
        });
        str += "</select>";
        $("#claim_cont").empty().append(str);
        let end = performance.now();

		let str1 = "Fetched All Claims in:"+ (end-start) + "ms";
		$("#msg").text(str1);
    });
}

function changeStatus() {
    let start = performance.now();
    $.post("http://localhost:9191/update/claim", {
        id: $("#id").val(),
        status: $("#status").val()
    }, function (str) {
        let end = performance.now();
        let str1 = "Updated Claim in:"+ (end-start) + "ms";
		$("#msg").text(str1);
    });
}

// function save() {
//     $.post("http://localhost:8080/save/claim", {
//         name: $("#name").val(),
//         status: $("#status").val()
//     }, function (str) {
//         $("#msg").empty().append(str);
//         getAllClaims();
//     });
// }


// function edit(id) {
//     $.post("http://localhost:8080/update/claim", {
//         ID: id,
//         name: $("#name").val(),
//         status: $("#status").val()
//     }, function (str) {
//         $("#msg").empty().append(str);
//         getAllClaims();
//     });
// }

$('document').ready(function(event) {
    getAllClaims();
});