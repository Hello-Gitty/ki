<?php
$extensionphp=".php";


function reformatContent($content){
    // bbcode pensez a ins�r� pour les changements de taille et de couleur...
    $bbcode= array (  
    "/\[b\](.+?)\[\/b\]/si",
    "/\[i\](.+?)\[\/i\]/si",
    "/\[u\](.+?)\[\/u\]/si",
    "/\[url=(.+?)\](.+?)\[\/url\]/si",
    "/\[size=(.+?)\](.+?)\[\/size\]/si",
    "/\[img\](.+?)\[\/img\]/si",
    "/\[color=(.+?)\](.+?)\[\/color\]/si",
    "/\[(.+?)\](.+?)\[\/(.+?)\]/si", 
    );



    $htmlcode= array (
    "<b>$1</b>",
    "<i>$1</i>",
    "<u>$1</u>",
    "<a href=\"$1\">$2</a>",
    "<font size=\"$1\">$2</font>",
    "<img src=\"$1\">",
    "<font color=\"$1\">$2</font>",
    "<div align=\"$1\">$2</div>",
    );


    return nl2br(preg_replace($bbcode,$htmlcode,$content));
}




?>




