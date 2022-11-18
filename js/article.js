$(document).ready(function () {

    for (var i = 1; i <= 1000; i++) {

        $(".add" + i).mouseenter(
            function () {
                $("#thumb_" + $(this).attr("class").substring(6)).addClass("yellow");

                $("#artimg_" + $(this).attr("class").substring(6)).addClass("half");

            }

        );

        $(".add" + i).mouseleave(
            function () {
                $("#thumb_" + $(this).attr("class").substring(6)).removeClass("yellow");
                $("#artimg_" + $(this).attr("class").substring(6)).removeClass("half");


            }

        );

    }

});



// 之後來研究
//
//   function edit_show(){
//            $("元件ID 或 class 名稱 或 元件的name").show();
//          }
//          function edit_hide(){
//            $("元件ID 或 class 名稱 或 元件的name").hide();
//          }
//
//





//第一組-link1




//
//        $(document).ready(function () {
//            $("#link1").mouseenter(
//                function () {
//                    $("#thumb").addClass("yellow");
//                }
//
//            );
//
//
//            $("#link1").mouseleave(
//                function () {
//                    $("#thumb").removeClass("yellow");
//                }
//
//            );
//        });
//
//
//        $(document).ready(function () {
//            $("#link1").mouseenter(
//                function () {
//                    $("#artimg").addClass("half");
//                }
//
//            );
//
//
//            $("#link1").mouseleave(
//                function () {
//                    $("#artimg").removeClass("half");
//                }
//
//            );
//        });


//第一組 - link2

//        $(document).ready(function () {
//            $("#link2").mouseenter(
//                function () {
//                    $("#thumb").addClass("yellow");
//                }
//
//            );
//
//            $("#link2").mouseleave(
//                function () {
//                    $("#thumb").removeClass("yellow");
//                }
//
//            );
//        });
//
//
//        $(document).ready(function () {
//            $("#link2").mouseenter(
//                function () {
//                    $("#artimg").addClass("half");
//                }
//
//            );
//
//
//            $("#link2").mouseleave(
//                function () {
//                    $("#artimg").removeClass("half");
//                }
//            );
//        });




//第一組 over



//第2組-link1





//        $(document).ready(function () {
//            $("#link3").mouseenter(
//                function () {
//                    $("#thumb1").addClass("yellow");
//                }
//
//            );
//
//
//            $("#link3").mouseleave(
//                function () {
//                    $("#thumb1").removeClass("yellow");
//                }
//
//            );
//        });
//
//
//        $(document).ready(function () {
//            $("#link3").mouseenter(
//                function () {
//                    $("#artimg1").addClass("half");
//                }
//
//            );
//
//
//            $("#link3").mouseleave(
//                function () {
//                    $("#artimg1").removeClass("half");
//                }
//
//            );
//        });


//第2組 - link2

//        $(document).ready(function () {
//            $("#link4").mouseenter(
//                function () {
//                    $("#thumb1").addClass("yellow");
//                }
//
//            );
//
//            $("#link4").mouseleave(
//                function () {
//                    $("#thumb1").removeClass("yellow");
//                }
//
//            );
//        });
//
//
//        $(document).ready(function () {
//            $("#link4").mouseenter(
//                function () {
//                    $("#artimg1").addClass("half");
//                }
//
//            );
//
//
//            $("#link4").mouseleave(
//                function () {
//                    $("#artimg1").removeClass("half");
//                }
//            );
//        });




//第2組 over
