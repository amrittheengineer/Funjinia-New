var script_url = "https://script.google.com/macros/s/AKfycbyDxxrbWabomXx1KkpQZgX_G-LkGUBaRDrJC-T4A63KlS1VQZ8/exec";
function insert_value() {
    var initial = $("#initial").val();
    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var reg = $("#reg-no").val();
    var dob = $("#dob").val();
    var board = $("#board option:selected").val();
    var url = script_url + "?callback=ctrlq&name=" + name + "&initial=" + initial + "&email=" + email + "&board=" + board + "&phone=" + phone + "&dob=" + dob + "&reg=" + reg + "&action=insert";
    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
    $("#resetForm").reset();
}
function ctrlq(e) {
    alert('Congrats! Registered Successfully ' + finalURL);
}