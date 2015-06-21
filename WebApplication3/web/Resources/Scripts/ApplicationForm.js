
$(document).ready(function() {
    $("#studentKeyDisplay").attr("disabled", "disabled");
    $("#yearGraduatedd").attr("disabled", "disabled");
    $("#course1").attr("disabled", "disabled");
    $("#course2").attr("disabled", "disabled");
    $("#universityOnVisa").attr("disabled", "disabled");
    $("input[name='graduated']").click(Graduated);
    $("#transferedApplicant").change(TransferApplicant);
});

function Graduated() {
    if ($("#graduated").is(":checked")) {
        $("#yearGraduatedd").removeAttr("disabled");
        $("#semester").attr("disabled", "disabled");
        $("#year").attr("disabled", "disabled");
    } else {
        $("#yearGraduatedd").attr("disabled", "disabled");
        $("#semester").removeAttr("disabled");
        $("#year").removeAttr("disabled");
    }
}

function TransferApplicant() {
    if ($("#transferedApplicant").is(":checked")) {
        $("#universityOnVisa").removeAttr("disabled");
        $("#course1").removeAttr("disabled");
        $("#course2").removeAttr("disabled");
    } else
    {
        $("#universityOnVisa").attr("disabled", "disabled");
        $("#course1").attr("disabled", "disabled");
        $("#course2").attr("disabled", "disabled");
    }
}

        