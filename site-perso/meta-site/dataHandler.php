<?php

include "dtd/article.php";

interface dataHandler {


    /**
     *
     * get the H1 title to writed as the title
     */
    function getH1();
    /**
     *
     * get the page title
     */
    function getTitle();
    /**
     * 
     * get the article echo as an error
     */
    function getError();
    /**
     * 
     * get the article echo as the about
     */
    function getAbout();

    /**
     * 
     * get the main article the index message
     */
    function getGreet();
    
    /**
     * 
     * find article by id
     * @param $id id of the article
     */
    function rechercheArticle($id);
    
    /**
     * 
     * get all article
     */   
     function getArticles();
}

?>