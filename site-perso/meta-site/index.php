<?php
/**
 * @author Découdre
 */

//collection de fonction qui vont taper dans le xml
// cette page ne fait que de la récupération et de l'affichage
include "fonction.inc.php";
include "dataHandlerXML.php";

$page_name="index".$extensionphp;
$articleFile ="data/metarticle.xml";
//récupération des variables de requete
$nom=$_GET["article"];
$propos=$_GET["propos"];

$xmlBase = "data/default.xml";
$xmlArticle = "data/metarticle.xml";

$handler = new dataHandlerXML($xmlBase, $xmlArticle);


// en fonction des param on va chercher quoi afficher
// si rien le default-> greet
// si apropos le propos
// si erreur, bah erreur
// sinon le bon article
if (isset($propos)){
    $article= $handler->getAbout();
}else{
    if (isset($nom)){
        $article = $handler->rechercheArticle($nom, $articleFile);
        if ( $article ==  ""){
            $article = $handler->getError();
        }
    }else{
        $article = $handler->getGreet();
    }
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

<head>


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title><?php echo $handler->getTitle()?></title>
<link href="data/main.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="page">
<div>
<h1><?php echo $handler->getH1()?></h1>
</div>
<br />
<div id="menu">
<?php
echo "- <a href=\"".$page_name."\">".$handler->getGreet()->getLabel()."</a><br/>";

foreach ($handler->getArticles() as $val){
    echo "- <a href=\"".$page_name."?article=".$val->getId()."\">".$val->getLabel()."</a><br/>";
}
?>
 <br />
- <a href="<?php echo $page_name?>?propos"><?php echo $handler->getAbout()->getLabel()?></a>
<br />
</div>
<br />

<div id="article">
<h2><?php  echo $article->getTitre() ?></h2>
<?php  echo reformatContent($article->getContenu())?></div>

</div>
</body>
</html>

