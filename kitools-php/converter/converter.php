<?php


$tabAlphabet= array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '.' ,'!','?');


$mode = 0;
if (isset($_POST["mode"])){
	$mode=$_POST["mode"];
}

$message=$_POST["message"];

if ( $mode == "tc"){
	$caractere =  strlen($message);
	$i = 0;
	$total=0;
	while($i != $caractere) {
		
		$el = substr($message,$i,1);
		$el = strtoupper ($el);
		
		$count= count($tabAlphabet);
		$j=0;
		while($j != $count) {
			
			if ($tabAlphabet[$j]==$el){
				echo $j+1;
				$total+= $j+1;
				echo ",";
			}
			$j++;
		}
		$i++;
	}
	echo "<br>Total n�cessaire: ".$total;
}

if ( $mode=="ct"){
	$table = explode ( "," , $message);
	$count = count($table);
	
	for ($i = 0; $i < $count; $i++) {
		echo $tabAlphabet[$table[$i]-1];
	}
}




echo "<br>";
?>

 !S�parez les chiffres par des virgules.!
<form action="converter.php" method="POST">
<textarea id="message" name="message" cols="100" rows="5"><?php echo $message?></textarea><br>
<input type="radio" name="mode" value="tc"> texte -> chiffre<br>
<input type="radio" name="mode" value="ct">chiffre -> texte<br>
<input type="submit" name="submit"/>
</form>

<?php 


echo "Caract�res possible au codage: ";

	$count = count($tabAlphabet);
	
	for ($i = 0; $i < $count; $i++) {
		echo "'".$tabAlphabet[$i]."'";
	}

?>