$(document).ready(function () {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");

        flame.on({
            click: function () {
                flame.removeClass("burn").addClass("puff");

                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });

                $("#glow").remove();

                txt.hide()
                   .html("Te deseamos un feliz 21 cumpleaños <br>")
                   .delay(750)
                   .fadeIn(300, function () {
                        // Segundo mensaje
                        setTimeout(function () {
                            txt.fadeOut(300, function () {
                                txt.html("Ojalá nos sigas contando chistes 21 años más...")
                                   .fadeIn(300, function () {
                                        // Tercer mensaje
                                        setTimeout(function () {
                                            txt.fadeOut(300, function () {
                                                txt.html("Y los que nos quedan...")
                                                   .fadeIn(300, function () {
                                                        // Redirección tras mostrar el último mensaje
                                                        setTimeout(function () {
                                                            window.location.href = "./sorpresa.html"; // cambia por tu archivo real
                                                        }, 2000);
                                                   });
                                            });
                                        }, 2000);
                                   });
                            });
                        }, 2000);
                   });

                $("#candle").animate(
                    {
                        opacity: ".5"
                    },
                    100
                );
            }
        });
    });
});


