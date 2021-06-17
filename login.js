$( document ).ready(function() {
    $("#divLoginAdmin").hide();
    $("#divLoginUser").hide();
    $("#divFooter").hide();

    $("#btnRoleAdmin").on("click", function() {
        $("#divLoginRole").hide();
        $("#divLoginAdmin").show();
        $("#divFooter").show();
    });

    $("#btnRoleUser").on("click", function() {
        $("#divLoginRole").hide();
        $("#divLoginUser").show();
        $("#divFooter").show();
    });

    $("#btnLoginBack").on("click", function() {
        $("#divLoginRole").show();
        $("#divLoginAdmin").hide();
        $("#divLoginUser").hide();
        $("#divFooter").hide();
    })


});