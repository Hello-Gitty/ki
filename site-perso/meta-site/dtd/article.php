<?php

class Article{

    private $titre;
    private $contenu;
    private $label;
    private $id;

    public function __construct($titre,$contenu,$label, $id){
        $this->titre=$titre;
        $this->contenu=$contenu;
        $this->label=$label;
        $this->id=$id;
    }
    
    public function getTitre(){
        return $this->titre;
    }

    public function getLabel(){
        return $this->label;
    }

    public function getContenu(){
        return $this->contenu;
    }

  public function getId(){
        return $this->id;
    }
}


?>