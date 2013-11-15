/**
 * Created by vineelal on 7/11/13.
 */
    function getTheme(){
    var selectedTheme = document.getElementById("themes").value;
    var link = document.getElementsByTagName("link").item(3);
    switch(selectedTheme){
        case "default":link.setAttribute("href","css/default.css");
            break;
       case "theme1":link.setAttribute("href","css/pebble.css");
            break;
       case "theme2":link.setAttribute("href","css/ocean.css");
            break;
        case "theme3":link.setAttribute("href","css/sky.css");
            break;
    }
}
