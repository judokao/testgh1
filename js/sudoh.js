function _toggle(name, speed) {
    var _ele = $(name);
    _ele.toggle(speed);
}

function toggleSlow(name) {
    _toggle(name, "normal");
}

function toggle(name) {
    _toggle(name, 0);
}

function searchUI(rough, detail) {
    toggle(rough);
    toggle(detail);
}

function roughSearch() {
    var _ele = $("input#anyKey");
    var _nany = $("input#nany");
    _nany.val(_ele.val());
    submitSearch();
    return false;
}

function detailSearch() {
    var _str = "";

    for (i = 0; i < 10; i++) {
        var _ele = $("input#adv" + i);
        if (_ele.val() == "")
            continue;

        {
            var _andor = $("select#andor" + i);
            if (_andor.val() == "|")
                _str += "|";

            var _yesnot = $("input#yesnot" + i);
            if (_yesnot.attr("checked"))
                _str += "-";

            var _option = $("select#option" + i);
            if (_option.val() != "")
                _str += _option.val() + ":";

            _str += jQuery.trim(_ele.val()) + " ";
        }
        //alert (_str );
    }
    var _nany = $("input#nany");
    _nany.val(_str);
    submitSearch();
    return false;
}

function submitSearch() {
    var _form = $("form#submit");
    _form.submit();
}


function addCondition() {
    var _now = $("input#now");
    var _limit = $("input#limit");

    _toggle("div#div" + _now.val());
    _now.val(parseInt(_now.val()) + 1);

    if (_now.val() == _limit.val())
        _toggle("input#addButton");
}

function submitSearchContentdm() {
    var content = $("input.content_text2");
    var content_text = content.val();
    if (content_text == null || content_text == undefined || content_text == '') {
        alert("是否確認提交？");
        return;
    }
    window.open("https://contentdm.lib.nccu.edu.tw/digital/search/searchterm/" + content_text + " /order/title");
    //window.open("https://cdm20070.contentdm.oclc.org/digital/collection/spc/search/searchterm/" + content_text + " /order/title");

}
