function dienblogger_RCv3(_0x60abx2) {
    var _0x60abx3;
    _0x60abx3 = "<ul class=\"dienblogger_RCv3\">";
    for (var _0x60abx4 = 0; numComments > _0x60abx4; _0x60abx4++) {
        var _0x60abx5, _0x60abx6, _0x60abx7, _0x60abx8;
        if (_0x60abx4 == _0x60abx2.feed.entry.length) {
            break
        };
        _0x60abx3 += "<li>";
        for (var _0x60abx9 = _0x60abx2.feed.entry[_0x60abx4], _0x60abxa = 0; _0x60abxa < _0x60abx9.link.length; _0x60abxa++) {
            "alternate" == _0x60abx9.link[_0x60abxa].rel && (_0x60abx5 = _0x60abx9.link[_0x60abxa].href)
        };
        for (var _0x60abxb = 0; _0x60abxb < _0x60abx9.author.length; _0x60abxb++) {
            _0x60abx6 = _0x60abx9.author[_0x60abxb].name["$t"], _0x60abx7 = _0x60abx9.author[_0x60abxb]["gd$image"].src
        };
        _0x60abx7 = -1 != _0x60abx7.indexOf("/s1600/") ? _0x60abx7.replace("/s1600/", "/s" + avatarSize + "-c/") : -1 != _0x60abx7.indexOf("/s113/") ? _0x60abx7.replace("/s113/", "/s" + avatarSize + "-c/") : -1 != _0x60abx7.indexOf("/s512-c/") && 0 != _0x60abx7.indexOf("https:") ? "https:" + _0x60abx7.replace("/s512-c/", "/s" + avatarSize + "-c/") : -1 != _0x60abx7.indexOf("blogblog.com/img/b16-rounded.gif") ? "//1.bp.blogspot.com/-NAMZejK41So/T0evV0_SSUI/AAAAAAAACso/ol6-PKkZipA/s" + avatarSize + "/md_blogger_logo.png" : -1 != _0x60abx7.indexOf("blogblog.com/img/openid16-rounded.gif") ? "//4.bp.blogspot.com/-k0U7v1WpNRs/T0euKMHQi_I/AAAAAAAACsg/DNqzinhvxt4/s" + avatarSize + "/md_openid_logo.png" : -1 != _0x60abx7.indexOf("blogblog.com/img/blank.gif") ? -1 != defaultAvatar.indexOf("gravatar.com") ? defaultAvatar + "&s=" + avatarSize : defaultAvatar : _0x60abx7, 1 == showAvatar && (_0x60abx8 = 1 == roundAvatar ? "dienblogger_avatar_RCv3" : "", _0x60abx3 += "<div class=\"avatarImage " + _0x60abx8 + "\"><img class=\"" + _0x60abx8 + "\" src=\"" + _0x60abx7 + "\" alt=\"" + _0x60abx6 + "\" width=\"" + avatarSize + "\" height=\"" + avatarSize + "\"/></div>"), _0x60abx3 += "<div class='dblg_rc_v3'><a href='" + _0x60abx5 + "'><span class='dienblogger_user user_name_RC-dblgv3'>" + _0x60abx6 + "</span></a></a>";
        var _0x60abxc = _0x60abx9.content["$t"],
            _0x60abxd = _0x60abxc.replace(/(<([^>]+)>)/gi, "");
        "" != _0x60abxd && _0x60abxd.length > characters ? (_0x60abxd = _0x60abxd.substring(0, characters), _0x60abxd += "…") : _0x60abxd = _0x60abxd, _0x60abx3 += "<span class=\"comment_content_dienblogger_RCv3\">" + _0x60abxd + "</span><a class='_dienblogger_RCv3_reply_btn' href='" + _0x60abx5 + "' style='margin:0 0 0 40px'>Trả lời</a><a class='_dienblogger_RCv3_reply_btn' href='javascript:like_btn_dienblogger' onClick='alert(&quot;Chức năng này hiện chưa khả dụng!&quot;)'>Thích</a>", _0x60abx3 += "</li>"
    };
    _0x60abx3 += "", document.write(_0x60abx3)
}
var numComments = 5,
    avatarSize = 40,
    characters = 100,
    defaultAvatar = defaultAvatar || "https://4.bp.blogspot.com/-jmA-qIOJIFU/WfgKSYnhm5I/AAAAAAAAABQ/ElEIBlHd31gISODb3GlA9Z_JPRKiSzvYQCLcBGAs/s40/Logo-Bac-Si-Windows.png",
    showAvatar = "undefined" == typeof showAvatar ? !0 : showAvatar,
    roundAvatar = "undefined" == typeof roundAvatar ? !0 : roundAvatar,
    hideCredits = "undefined" == typeof hideCredits ? !1 : roundAvatar