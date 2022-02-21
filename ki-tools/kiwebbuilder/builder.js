/**
	by Famine id 794
	Ki builder V4
	
 */

/**
Collection des id de la page
 */
var SELECTORS = {
	CONTAINER: {
		VOCATION: "conteneur_vocations",
		CARACTERISTIQUES: "conteneur_caracteristiques",
		COMPETENCES: "conteneur_competences",
		PERSONNAGE: "conteneur_character"
	},
	// Selector des selects
	SELECT: {
		PV: "select_pv",
		VOCATIONS: {
			prefix: "select_vocation_",
			suffix: "_niveau",
			listVocation: [],
			listNiveau: []
		},
		CARACTERISTIQUES: {
			prefix: "select_caract_",
			list: []
		},
		COMPETENCES: {
			prefix: "select_competence_",
			list: [] // {select: "id", nom: ""}
		}
	},
	INPUT: {
		NOM: "input_nom",
		PA: "input_pa",
		DEPENSE: "input_depense",
		PP: "input_pp",
		BATIMENTMAX: "input_batiment",
		CHARGE: "input_charge",
		EMPLOYES: "input_employes",
		TGROUPE: "input_taille_groupe",
		DESCRIPTION: "",
		INOUT: "input_import_export"
	},
	AREA: {
		APERCU: "area_apercu",
		DESCRIPTION: "area_description"
	},
	BUTTON: {
		IMPORT: "button_import",
		EXPORT: "button_export",
		RESET: "button_reset"
	}
}

var CONSTANTES = {
	PV: {
		MIN: 25,
		MAX: 50,
		COUT_PA: 2,
		SEUIL1: 30,
		COUTS1: 3,
		SEUIL2: 40,
		COUTS2: 4
	},
	CARACTERISTIQUE: {
		MIN: 1,
		MAX: 6,
		COUT_PA: 3
	},
	COMPETENCE: {
		MIN: 0,
		MAX: 6,
		COUT_PA: 1
	},
	VOCATION: {
		MIN: 0,
		MAX: 6,
		COUT_PA: 5
	}
}

var POTENTIEL = {
	POSITIF: [50, 56, 61, 65, 69, 72, 75, 78, 81, 83, 85, 87, 89, 91, 93, 94, 95, 96, 97, 98, 99],
	NEGATIF: [50, 44, 38, 33, 28, 23, 19, 15, 12, 9, 7, 5, 4, 3, 2, 1]
}


//var VOCATIONS = JSON.parse(vocation.json);

var VOCATIONS = [
	{
		nom: "carriere",
		libelle: "Carrière",
		liste: [
			{ nom: "", libelle: "-Aucune-" },
			{ nom: "architecte", libelle: "Architecte" },
			{ nom: "artiste", libelle: "Artiste" },
			{ nom: "assassin", libelle: "Assassin" },
			{ nom: "astrologue", libelle: "Astrologue" },
			{ nom: "avocat", libelle: "Avocat" },
			{ nom: "criminel", libelle: "Criminel" },
			{ nom: "diplomate", libelle: "Diplomate" },
			{ nom: "espion", libelle: "Espion" },
			{ nom: "explorateur", libelle: "Explorateur" },
			{ nom: "faussaire", libelle: "Faussaire" },
			{ nom: "informaticien", libelle: "Informaticien" },
			{ nom: "inquisiteur", libelle: "Inquisiteur" },
			{ nom: "marin", libelle: "Marin" },
			{ nom: "mecanicien", libelle: "Mécanicien" },
			{ nom: "medecin", libelle: "Médecin" },
			{ nom: "mentat", libelle: "Mentat" },
			{ nom: "mercenaire", libelle: "Mercenaire" },
			{ nom: "missionnaire", libelle: "Missionnaire" },
			{ nom: "negociant", libelle: "Négociant" },
			{ nom: "officier", libelle: "Officier" },
			{ nom: "pretre", libelle: "Prêtre" },
			{ nom: "prostitue", libelle: "Prostitué" },
			{ nom: "sorcier", libelle: "Sorcier" },
			{ nom: "terroriste", libelle: "Terroriste" },
			{ nom: "trafiquant", libelle: "Trafiquant" }
		]
	},
	{
		nom: "type",
		libelle: "Type",
		liste: [
			{ nom: "", libelle: "-Aucune-" },
			{ nom: "agile", libelle: "Agile" },
			{ nom: "ascete", libelle: "Ascète" },
			{ nom: "calme", libelle: "Calme" },
			{ nom: "charismatique", libelle: "Charismatique" },
			{ nom: "fort", libelle: "Fort" },
			{ nom: "gestionnaire", libelle: "Gestionnaire" },
			{ nom: "gros", libelle: "Gros" },
			{ nom: "intellectuel", libelle: "Intellectuel" },
			{ nom: "mutant", libelle: "Mutant" },
			{ nom: "mystique", libelle: "Mystique" },
			{ nom: "observateur", libelle: "Observateur" },
			{ nom: "optimiste", libelle: "Optimiste" },
			{ nom: "sauvage", libelle: "Sauvage" },
			{ nom: "vif", libelle: "Vif" },
			{ nom: "violent", libelle: "Violent" },
			{ nom: "volontaire", libelle: "Volontaire" },
			{ nom: "creaturemarine", libelle: "Créature Marine" },
			{ nom: "creatureaerienne", libelle: "Créature Aérienne" }
		]
	},
	{
		nom: "politique",
		libelle: "Politique",
		liste: [
			{ nom: "", libelle: "-Aucune-" },			
			{ nom: "agitateur", libelle: "Agitateur" },
			{ nom: "belliciste", libelle: "Belliciste" },
			{ nom: "bureaucrate", libelle: "Bureaucrate" },
			{ nom: "démagogue", libelle: "Démagogue" },
			{ nom: "fanatique", libelle: "Fanatique" },
			{ nom: "laxiste", libelle: "Laxiste" },
			{ nom: "legaliste", libelle: "Légaliste" },
			{ nom: "magouilleur", libelle: "Magouilleur" },
			{ nom: "moraliste", libelle: "Moraliste" },
			{ nom: "obscurantiste", libelle: "Obscurantiste" },
			{ nom: "pacifiste", libelle: "Pacifiste" },
			{ nom: "pilierdebar", libelle: "Pilier de Bar" },
			{ nom: "rationaliste", libelle: "Rationaliste" },
			{ nom: "reactionnaire", libelle: "Réactionnaire" },
			{ nom: "revolutionnaire", libelle: "Révolutionnaire" },
			{ nom: "syndicaliste", libelle: "Syndicaliste" },
			{ nom: "voyou", libelle: "Voyou" }
		]
	},
	{
		nom: "combat",
		libelle: "Combat",
		liste: [
			{ nom: "", libelle: "-Aucune-" },
			{ nom:   "lutteur", libelle: "Lutteur" },
			{ nom: "artsmartiaux", libelle:  "Arts Martiaux" },
			{ nom: "lamerapide",   libelle: "Lame Rapide"  },
			{ nom: "lameprecise",  libelle: "Lame Précise" },
			{ nom:  "lamedefensive", libelle: "Lame Défensive" },
			{ nom:  "lameviolente" , libelle: " Lame Violente"  },
			{ nom: "lameavecpanache", libelle: "Lame avec Panache" },
			{ nom: "tireurdelite", libelle: "Tireur d'Élite" },
			{ nom: "guerilla", libelle: "Guérilla" },
			{ nom: "desperado", libelle: "Desperado" }
]
	},
{
	nom: "pouvoir",
		libelle: "Pouvoir",
			liste: [
				{ nom: "", libelle: "-Aucune-" },
				{ nom: "abjuration", libelle: "Abjuration" },
				{ nom: "necromancie", libelle: "Nécromancie"   },
				{ nom: "illusion",  libelle: "Illusion" },
				{ nom: "enchantement", libelle: "Enchantement"   },
				{ nom: "magievitale", libelle: "Magie Vitale" },
				{ nom:  "metamorphose", libelle: "Métamorphose" },
				{ nom: "alteration", libelle: "Altération" },
				{ nom: "elementalismefeu",  libelle:  "Élémentalisme - Feu" },
				{ nom: "elementalismeeau", libelle: "Élémentalisme - Eau" },
				{ nom: "elementalismeair", libelle:  "Élémentalisme - Air" },
				{ nom: "elementalismeterre", libelle: "Élémentalisme - Terre" },
				{ nom: "divination", libelle: "Divination"  },
				{ nom: "demonologie", libelle: "Démonologie" },
				{ nom: "hasard",   libelle: "Hasard" },
				{ nom: "charme", libelle:  "Charme"   },
				{ nom: "druidisme", libelle: "Druidisme" },
				{ nom:  "chamanisme",  libelle:  "Chamanisme"  },
				{ nom: "spiritisme", libelle: "Spiritisme" },
				{ nom: "paladinat", libelle: "Paladinat"  },
				{ nom: "bouletitude", libelle: "Bouletitude" },
				{ nom: "telepathie", libelle: "Télépathie" },
				{ nom: "telekinesie", libelle: "Télékinésie" }
			]
}
]

var CARACTERISTIQUES = [{ nom: "FOR", libelle: "FOR" }, { nom: "VOL", libelle: "VOL" }, { nom: "CHA", libelle: "CHA" }, { nom: "GES", libelle: "GES" }, { nom: "INT", libelle: "INT" }, { nom: "PER", libelle: "PER" }]
var COMPETENCES = [
	{ nom: "baratin", libelle: "Baratin" },
	{ nom: "combatmainnues", libelle: "Combat Mains Nues" },
	{ nom: "combatcontact", libelle: "Combat Contact" },
	{ nom: "combatdistance", libelle: "Combat Distance" },
	{ nom: "commerce", libelle: "Commerce" },
	{ nom: "demolition", libelle: "Démolition" },
	{ nom: "discretion", libelle: "Discrétion" },
	{ nom: "eloquence", libelle: "Éloquence" },
	{ nom: "falsification", libelle: "Falsification" },
	{ nom: "foi", libelle: "Foi" },
	{ nom: "informatique", libelle: "Informatique" },
	{ nom: "medecine", libelle: "Médecine" },
	{ nom: "observation", libelle: "Observation" },
	{ nom: "organisation", libelle: "Organisation" },
	{ nom: "pouvoir", libelle: "Pouvoir" },
	{ nom: "seduction", libelle: "Séduction" },
	{ nom: "survie", libelle: "Survie" },
	{ nom: "vol", libelle: "Vol" }
]

var EMPTY_FICHE = {
	NOM: "",
	PA: 0,
	NB_DEPENSE: 0,
	PV: CONSTANTES.PV.MIN,
	VOCATIONS: [],
	CARACTERISTIQUES: [],
	COMPETENCES: [],
	DESCRIPTION: ""
}

var CURRENT_FICHE;
function initFiche() {
	// Remplir la fiche avec les compétences et CARACTERISTIQUES
	// On fait une copie de la fiche vide
	CURRENT_FICHE = Object.assign({}, EMPTY_FICHE);

	for (var i = 0; i < VOCATIONS.length; i++) {
		CURRENT_FICHE.VOCATIONS[i] = {
			nature: VOCATIONS[i].nom,
			nom: "",
			niveau: CONSTANTES.VOCATION.MIN
		}
	}
	for (var i = 0; i < CARACTERISTIQUES.length; i++) {
		CURRENT_FICHE.CARACTERISTIQUES[i] = {
			nom: CARACTERISTIQUES[i].nom,
			niveau: CONSTANTES.CARACTERISTIQUE.MIN
		}
	}
	for (var i = 0; i < COMPETENCES.length; i++) {
		CURRENT_FICHE.COMPETENCES[i] = {
			nom: COMPETENCES[i].nom,
			niveau: CONSTANTES.COMPETENCE.MIN
		}
	}
}



function init() {

	initFiche();
	// Action sur les boutons
	initListeners(),
		// Initialisation élément de la fiche
		initCharacter();
	initVocations();
	initCaracteristiques();
	initCompetences();
}

function initListeners() {

}


function initCharacter() {
	// Ici on construit le premier tableau avec les éléments génériques du personnage
	// y compris les valeurs dérivées
	var td;
	var tr;
	var select;
	var div = getEl(SELECTORS.CONTAINER.PERSONNAGE);
	var table = addTableNode(div);
	tr = addTrNode(table);
	var th = addThNode(tr);
	th.setAttribute("colspan", 2);
	addTextNode(th, "PERSONNAGE");

	tr = addTrNode(table);
	td = addTdNode(tr);
	addTextNode(td, "NOM");
	td = addTdNode(tr);
	addInputNode(td, SELECTORS.INPUT.NOM, "", false);

	tr = addTrNode(table);
	td = addTdNode(tr);
	addTextNode(td, "PV");
	td = addTdNode(tr);
	select = addSelectNode(td, SELECTORS.SELECT.PV);
	select.setAttribute('onchange', 'changePV(this)');
	for (var jj = CONSTANTES.PV.MIN; jj <= CONSTANTES.PV.MAX; jj++) {
		addOptionNode(select, jj, jj)
	}

	tr = addTrNode(table);
	td = addTdNode(tr);
	addTextNode(td, "PA");
	td = addTdNode(tr);
	addInputNode(td, SELECTORS.INPUT.PA, "0", true);

	tr = addTrNode(table);
	td = addTdNode(tr);
	addTextNode(td, "NB Dépense");
	td = addTdNode(tr);
	addInputNode(td, SELECTORS.INPUT.DEPENSE, "0", true);


	tr = addTrNode(table);
	td = addTdNode(tr);
	addTextNode(td, "Regen PP");
	td = addTdNode(tr);
	addInputNode(td, SELECTORS.INPUT.PP, 0, true);

	tr = addTrNode(table);
	td = addTdNode(tr);
	addTextNode(td, "NB Batiment Max");
	td = addTdNode(tr);
	addInputNode(td, SELECTORS.INPUT.BATIMENTMAX, "3", true);

	tr = addTrNode(table);
	td = addTdNode(tr);
	addTextNode(td, "Charge");
	td = addTdNode(tr);
	addInputNode(td, SELECTORS.INPUT.CHARGE, "20", true);

	tr = addTrNode(table);
	td = addTdNode(tr);
	addTextNode(td, "NB Employé");
	td = addTdNode(tr);
	addInputNode(td, SELECTORS.INPUT.EMPLOYES, "1", true);

	tr = addTrNode(table);
	td = addTdNode(tr);
	addTextNode(td, "Groupe Max");
	td = addTdNode(tr);
	addInputNode(td, SELECTORS.INPUT.TGROUPE, "8", true);
}



/**
Fonction de création du tableau des vocations
 */
function initVocations() {
	var div = getEl(SELECTORS.CONTAINER.VOCATION);
	var table = addTableNode(div);

	for (var i = 0; i < VOCATIONS.length; i++) {
		var tr = addTrNode(table);
		var th = addThNode(tr);
		addTextNode(th, VOCATIONS[i].libelle);
		// Select des vocations
		var td = addTdNode(tr);

		var idSelect = SELECTORS.SELECT.VOCATIONS.prefix + VOCATIONS[i].nom;
		var idSelectNiveau = SELECTORS.SELECT.VOCATIONS.prefix + VOCATIONS[i].nom + SELECTORS.SELECT.VOCATIONS.suffix;
		SELECTORS.SELECT.VOCATIONS.listVocation[i] = {
			nom: VOCATIONS[i].nom,
			select: idSelect
		}
		SELECTORS.SELECT.VOCATIONS.listNiveau[i] = {
			nom: VOCATIONS[i].nom,
			select: idSelectNiveau
		}

		var select = addSelectNode(td, idSelect);
		select.setAttribute('onchange', 'changeVocation(this)');
		select.classList.add("selectText");
		for (var jj = 0; jj < VOCATIONS[i].liste.length; jj++) {
			var voc = VOCATIONS[i].liste[jj];
			addOptionNode(select, voc.libelle, voc.nom);
		}
		
		
		// Select des niveaux
		var td = addTdNode(tr);
		select = addSelectNode(td, idSelectNiveau);
		select.setAttribute('onchange', 'changeNiveauVocation(this)');
		for (var jj = CONSTANTES.VOCATION.MIN; jj <= CONSTANTES.VOCATION.MAX; jj++) {
			addOptionNode(select, jj, jj);
		}
	}
}



/**
Fonction de création du tableau des caracteristiques
 */
function initCaracteristiques() {
	var div = getEl(SELECTORS.CONTAINER.CARACTERISTIQUES);
	var table = addTableNode(div);
	var tr = addTrNode(table);
	// On parcourt les caracteristiques pour compéter le tableau
	for (var i = 0; i < CARACTERISTIQUES.length; i++) {
		var th = addThNode(tr);
		addTextNode(th, CARACTERISTIQUES[i].libelle);
	}
	tr = addTrNode(table)
	for (var i = 0; i < CARACTERISTIQUES.length; i++) {
		var td = addTdNode(tr);
		var idSelect = SELECTORS.SELECT.CARACTERISTIQUES.prefix + CARACTERISTIQUES[i].nom;
		SELECTORS.SELECT.CARACTERISTIQUES.list[i] = {
			nom: CARACTERISTIQUES[i].nom,
			select: idSelect
		}
		// Ajout select
		var select = addSelectNode(td, idSelect);
		select.setAttribute('onchange', 'changeCaract(this)');
		for (var jj = CONSTANTES.CARACTERISTIQUE.MIN; jj <= CONSTANTES.CARACTERISTIQUE.MAX; jj++) {
			addOptionNode(select, jj, jj)
		}
	}
}

/**
Fonction de création du tableau des compétences
 */
function initCompetences() {
	var div = getEl(SELECTORS.CONTAINER.COMPETENCES);
	var table = addTableNode(div);
	var tr = addTrNode(table);
	// ligne entete
	var th = addThNode(tr);
	th.setAttribute("colspan", 2);
	addTextNode(th, "COMPÉTENCES");

	for (var i = 0; i < COMPETENCES.length; i++) {
		var tr = addTrNode(table);
		var td = addTdNode(tr);
		addTextNode(td, COMPETENCES[i].libelle);
		td = addTdNode(tr);
		var idSelect = SELECTORS.SELECT.COMPETENCES.prefix + COMPETENCES[i].nom;
		SELECTORS.SELECT.COMPETENCES.list[i] = {
			nom: COMPETENCES[i].nom,
			select: idSelect
		}
		// Ajout select
		var select = addSelectNode(td, idSelect);
		select.setAttribute('onchange', 'changeCompetence(this)');
		for (var jj = CONSTANTES.COMPETENCE.MIN; jj <= CONSTANTES.COMPETENCE.MAX; jj++) {
			addOptionNode(select, jj, jj)
		}
	}
}



function changeCaract(obj) {
	var indexChanged = findIndex(obj.id, SELECTORS.SELECT.CARACTERISTIQUES.list);
	var currentVal = CURRENT_FICHE.CARACTERISTIQUES[indexChanged].niveau;
	var newVal = obj.value;

	var coutPA = getDiffCout(newVal, currentVal, CONSTANTES.CARACTERISTIQUE.COUT_PA);
	var nbDepense = newVal - currentVal;
	// MAJ fiche
	CURRENT_FICHE.CARACTERISTIQUES[indexChanged].niveau = newVal;
	CURRENT_FICHE.PA += coutPA;
	CURRENT_FICHE.NB_DEPENSE += nbDepense;

	updatePersonnage();
}

function changeCompetence(obj) {
	var indexChanged = findIndex(obj.id, SELECTORS.SELECT.COMPETENCES.list);
	var currentVal = CURRENT_FICHE.COMPETENCES[indexChanged].niveau;
	var newVal = obj.value;

	var coutPA = getDiffCout(newVal, currentVal, CONSTANTES.COMPETENCE.COUT_PA);
	var nbDepense = newVal - currentVal;
	// MAJ fiche
	CURRENT_FICHE.COMPETENCES[indexChanged].niveau = newVal;
	CURRENT_FICHE.PA += coutPA;
	CURRENT_FICHE.NB_DEPENSE += nbDepense;

	updatePersonnage();
}

function changePV(obj) {
	var currentVal = CURRENT_FICHE.PV;
	var newVal = obj.value;

	var coutPA = getCoutPaPV(newVal) - getCoutPaPV(currentVal);
	var nbDepense = newVal - currentVal;

	// MAJ fiche
	CURRENT_FICHE.PV = newVal;
	CURRENT_FICHE.PA += coutPA;
	CURRENT_FICHE.NB_DEPENSE += nbDepense;
	updatePersonnage();
}

function changeVocation(obj) {
	var indexChanged = findIndex(obj.id, SELECTORS.SELECT.VOCATIONS.listVocation);
	CURRENT_FICHE.VOCATIONS[indexChanged].nom = obj.value; 
}

function changeNiveauVocation(obj) {
	var indexChanged = findIndex(obj.id, SELECTORS.SELECT.VOCATIONS.listNiveau);
	var currentVal = CURRENT_FICHE.VOCATIONS[indexChanged].niveau;
	var newVal = obj.value;


	var coutPA = getDiffCout(newVal, currentVal, CONSTANTES.VOCATION.COUT_PA);
	var nbDepense = newVal - currentVal;

	// MAJ fiche
	CURRENT_FICHE.VOCATIONS[indexChanged].niveau = newVal;
	CURRENT_FICHE.PA += coutPA;
	CURRENT_FICHE.NB_DEPENSE += nbDepense;

	updatePersonnage();
}


function updatePersonnage() {
	getEl(SELECTORS.INPUT.PA).value = CURRENT_FICHE.PA;
	getEl(SELECTORS.INPUT.DEPENSE).value = CURRENT_FICHE.NB_DEPENSE;

	// REcalcul valeur dérivée
	getEl(SELECTORS.INPUT.CHARGE).value = 18 + (2 * CURRENT_FICHE.CARACTERISTIQUES[0].niveau); // FOR --  18 + 2 x FOR (de base Charge
	getEl(SELECTORS.INPUT.BATIMENTMAX).value = 2 + parseInt(CURRENT_FICHE.CARACTERISTIQUES[3].niveau); // GES + 2
	getEl(SELECTORS.INPUT.EMPLOYES).value = parseInt(CURRENT_FICHE.VOCATIONS[2].niveau) + parseInt(CURRENT_FICHE.CARACTERISTIQUES[2].niveau); // Niveau de Vocation Politique + CHA (de base) nb employé
	getEl(SELECTORS.INPUT.TGROUPE).value = 6 + parseInt(CURRENT_FICHE.VOCATIONS[2].niveau) + (2 * parseInt(CURRENT_FICHE.CARACTERISTIQUES[2].niveau)); // taille groupe : 6 + niveau vocation politique + 2 x CHA modifié
	getEl(SELECTORS.INPUT.PP).value = parseInt(CURRENT_FICHE.VOCATIONS[2].niveau) * 10; // Niveau de Vocation Politique * 10
}


function rechargerDepuisCurrentFiche() {
	// INPUT libre de la fiche
	getEl(SELECTORS.INPUT.NOM).value = CURRENT_FICHE.NOM;
	getEl(SELECTORS.AREA.DESCRIPTION).value = CURRENT_FICHE.DESCRIPTION;

	// Parcours des vocations 
	for (var i = 0; i < CURRENT_FICHE.VOCATIONS.length; i++) {
		var objVoc = CURRENT_FICHE.VOCATIONS[i];
		getEl(SELECTORS.SELECT.VOCATIONS.listVocation[i].select).value = objVoc.nom;
		getEl(SELECTORS.SELECT.VOCATIONS.listNiveau[i].select).value = objVoc.niveau;
	}

	for (var i = 0; i < CURRENT_FICHE.CARACTERISTIQUES.length; i++) {
		var objVoc = CURRENT_FICHE.CARACTERISTIQUES[i];
		getEl(SELECTORS.SELECT.CARACTERISTIQUES.list[i].select).value = objVoc.niveau;
	}

	for (var i = 0; i < CURRENT_FICHE.COMPETENCES.length; i++) {
		var objVoc = CURRENT_FICHE.COMPETENCES[i];
		getEl(SELECTORS.SELECT.COMPETENCES.list[i].select).value = objVoc.niveau;
	}
	getEl(SELECTORS.SELECT.PV).value = CURRENT_FICHE.PV;

	updatePersonnage();
}


/**
	On va retourner l'index de l'élément correspondant à l'id de select
 */
function findIndex(id, collectionSelect) {
	for (var i = 0; i < collectionSelect.length; i++) {
		var el = collectionSelect[i]
		if (el.select == id) {
			return i;
		}
	}
}


// Function de gestion de formulaire

// Ou le RESET 
function kiKrash() {
	initFiche();
	rechargerDepuisCurrentFiche();
	getEl(SELECTORS.AREA.APERCU).value = "";
}



function load() {
	var oldFiche = getEl(SELECTORS.INPUT.INOUT).value;
	CURRENT_FICHE = readObject64(oldFiche)
	rechargerDepuisCurrentFiche();
}

function save() {
	CURRENT_FICHE.NOM = getEl(SELECTORS.INPUT.NOM).value;
	CURRENT_FICHE.DESCRIPTION = getEl(SELECTORS.AREA.DESCRIPTION).value;
	var datexport = objectTo64(CURRENT_FICHE);
	var input = getEl(SELECTORS.INPUT.INOUT);
	input.value = datexport;
	input.select();
	document.execCommand('copy');
	alert("CODE copié dans le presse papier !");
}

function apercu() {

	var printable = "";
	printable += "NOM: "+ getEl(SELECTORS.INPUT.NOM).value + "\n";
	printable += "PV: "+ CURRENT_FICHE.PV + "\n";
	printable += "PA: "+ CURRENT_FICHE.PA + "\n";	
	printable += "NB DEPENSE: "+ CURRENT_FICHE.NB_DEPENSE + "\n";
						
	// Parcours des vocations 
	for (var i = 0; i < CURRENT_FICHE.VOCATIONS.length; i++) {
		var obj = CURRENT_FICHE.VOCATIONS[i];
		if (obj.niveau > 0) {
			var selectIndex = getEl(SELECTORS.SELECT.VOCATIONS.listVocation[i].select).selectedIndex;
			var libelle = VOCATIONS[i].liste[selectIndex].libelle;
			printable += libelle + " " + obj.niveau + "\n";
		} 
	}

	for (var i = 0; i < CURRENT_FICHE.CARACTERISTIQUES.length; i++) {
		var obj = CURRENT_FICHE.CARACTERISTIQUES[i];
		if (obj.niveau > 1) {
			var libelle = CARACTERISTIQUES[i].libelle;
			printable += libelle + " " + obj.niveau + "\n";
		} 
	}

	for (var i = 0; i < CURRENT_FICHE.COMPETENCES.length; i++) {
		var obj = CURRENT_FICHE.COMPETENCES[i];
		if (obj.niveau > 0) {
			var libelle = COMPETENCES[i].libelle;
			printable += libelle + " " + obj.niveau + "\n";
		} 
	}

	printable += "DESCRIPTION: \n";
	printable += getEl(SELECTORS.AREA.DESCRIPTION).value;
	
	getEl(SELECTORS.AREA.APERCU).value = printable;
}



// fonction de conversion json base 64
function objectTo64(array) {
	return btoa(JSON.stringify(array));
}


function readObject64(array64) {
	var result = null;
	if (array64.length > 0) {
		try {
			result = JSON.parse(atob(array64))
		} catch (error) {
			alert("Code partie erroné");
			console.log(error);
		}
	}
	return result;
}



/** CALCUL PA */

function getCoutPaPV(val) {

	var result = 0;
	var valTemp = val;

	var nbSupBase = 0;
	var nbSupSeuil1 = 0;
	var nbSupSeuil2 = 0;

	/**
	 * Pour chaque seuil au dessus de la base
	 * on va compter leur nombre
	 * et multiplier par le multiplicateur adapté
	 */
	if (valTemp > CONSTANTES.PV.SEUIL2) {
		nbSupSeuil2 = valTemp - CONSTANTES.PV.SEUIL2;
		valTemp = CONSTANTES.PV.SEUIL2;
		result += nbSupSeuil2 * CONSTANTES.PV.COUTS2;
	}
	if (valTemp > CONSTANTES.PV.SEUIL1) {
		nbSupSeuil1 = valTemp - CONSTANTES.PV.SEUIL1;
		valTemp = CONSTANTES.PV.SEUIL1;
		result += nbSupSeuil1 * CONSTANTES.PV.COUTS1;
	}
	if (valTemp > CONSTANTES.PV.MIN) {
		nbSupBase = valTemp - CONSTANTES.PV.MIN;
		result += nbSupBase * CONSTANTES.PV.COUT_PA;
	}

	return result;
}


function getDiffCout(newVal, oldVal, cout) {

	return getCout(newVal, cout) - getCout(oldVal, cout)
}


function getCout(iter, coup) {
	result = 0;

	for (i = 0; i <= iter; i++) {
		result += i * coup;
	}
	return result;
}