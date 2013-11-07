/**
 * Created by vineelal on 7/11/13.
 */
    function getTheme(){
    var selectedTheme = document.getElementById("themes").value;
    var link = document.getElementsByTagName("link").item(0);
    switch(selectedTheme){
        case "default":link.setAttribute("href","css/default.css");
            break;
       case "theme1":link.setAttribute("href","css/style1.css");
            break;
       case "theme2":link.setAttribute("href","css/style2.css");
            break;
        case "theme3":link.setAttribute("href","css/style3.css");
            break;
    }

}
