/**
 * Created by vineelal on 7/11/13.
 */
    function getTheme(){
    var selectedTheme = document.getElementById("themes").value;
    console.log(selectedTheme);
    var oldlink = document.getElementsByTagName("link").item(0);
    switch(selectedTheme){
        case "default":oldlink.setAttribute("href","css/default.css");
            break;
       case "theme1":oldlink.setAttribute("href","css/style1.css");
            break;
       case "theme2":oldlink.setAttribute("href","css/style2.css");
            break;
        case "theme3":oldlink.setAttribute("href","css/style3.css");
            break;
    }

}
