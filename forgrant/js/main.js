$(function(){$("input").focus(function(){$(this).parent().find("label").addClass("active")}),$("input").focusout(function(){$(this).val()||$(this).parent().find("label").removeClass("active")}),$(document).on("click",function(t){$(".select-container").hasClass("active")&&!$(t.target).hasClass("selected-custom")&&$(".select-container").removeClass("active")}),$(".selected-custom").on("click",function(){elem=$(this),setTimeout(function(){$(elem).parent().hasClass("active")||$(".select-container").removeClass("active"),$(elem).parent().toggleClass("active")},50)}),$("ul.select-custom li").on("click",function(t){$(this).parents(".select-container").find(".selected-custom").text($(this).text()),$(this).parents(".select-container").toggleClass("active")}),$('a[href^="#"]').click(function(){var t=$(this).attr("href");return $("html, body").animate({scrollTop:$(t).offset().top-100},800),!1})});