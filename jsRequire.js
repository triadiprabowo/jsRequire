/* 
** $.jsRequire() plugin for jQuery library
** Developed by Triadi Prabowo
** Documentation and latest version http://github.com/triadiprabowo/jsrequire
** Initial Build - Version 1.0
** MIT License
*/

(function($)
{
    var jsRequire_imported = [];

    $.extend(true,
    {
        jsRequire : function(script)
        {
            var isExisted = false;
            for (var i = 0; i < jsRequire_imported.length; i++)
                if (jsRequire_imported[i] == script) {
                    isExisted = true;
                    break;
                }

                if (isExisted == false) {
                    $("head").append('<script type="text/javascript" src="' + script + '"></script>');
                    jsRequire_imported.push(script);
                }
            }
        });

})(jQuery);