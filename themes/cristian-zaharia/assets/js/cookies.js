$(document).ready(function (){
		
    accept_cookies = document.cookie.replace(/(?:(?:^|.*;\s*)accept_cookies\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if(!accept_cookies){
        $('.cookies').addClass('d-block');
    }
    
    $('#accept_cookies').click(function(){
        $('.cookies').removeClass('d-block');
        var d = new Date();
        d.setFullYear(d.getFullYear() + 1);
        document.cookie = "accept_cookies=1; path=/; expires=" + d.toUTCString();
        return false;
    });
});