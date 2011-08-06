<?php

include "dataHandler.php";

class dataHandlerXML implements dataHandler{

    private $xmlBase;
    private $xmlArticle;

    public function __construct($xmlBase,$xmlArticle){
        $this->xmlBase=$xmlBase;
        $this->xmlArticle=$xmlArticle;
         
    }

    function getH1(){
        $xmlArticle = simplexml_load_file($this->xmlBase);
        $result=$xmlArticle->titleh;
        return $result;
    }

    function getTitle(){
        $xmlArticle = simplexml_load_file($this->xmlBase);
        $result=$xmlArticle->sitetitle;
        return $result;
    }

    function getError(){
        $xmlArticle = simplexml_load_file($this->xmlBase);
        $result=new Article($xmlArticle->error->titre, $xmlArticle->error->contenu, $xmlArticle->error->label, 0);
        return $result;
    }

    function getAbout(){
        $xmlArticle = simplexml_load_file($this->xmlBase);
        $result=new Article($xmlArticle->about->titre, $xmlArticle->about->contenu, $xmlArticle->about->label, 0);
        return $result;
    }

    function getGreet(){
        $xmlArticle = simplexml_load_file($this->xmlBase);
        $result=new Article($xmlArticle->greet->titre, $xmlArticle->greet->contenu, $xmlArticle->greet->label, 0);
        return $result;
    }

    function rechercheArticle($id){
        $xmlArticle = simplexml_load_file($this->xmlArticle);
        $result="";
        foreach ($xmlArticle->article as $cle=>$val){

            if ( $id==$val->id){
                $result=new Article($val->titre, $val->contenu, $val->label, $val->id);
            }
        }
        return $result;
    }

    function getArticles(){
        $xmlArticle = simplexml_load_file("data/metarticle.xml");
        $result=array();
        $i=0;
        foreach ($xmlArticle->article as $cle=>$val){
            $result[$i]=new Article($val->titre, $val->contenu, $val->label, $val->id);
            $i++;
        }
        return $result;
    }
}

?>