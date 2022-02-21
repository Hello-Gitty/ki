/**
 * Fonctions utilitaires Création de node, ajout de node. etc.
 *  *
 */

// raccourci
function getEl(id) {
	return window.document.getElementById(id);
}

/**
 * Fonction de base pour ajouter un noeud d'un type
 * 
 * @param NodeParent
 *            parent
 * @param typeNode
 *            type de noeud
 * @returns noeud créé
 */
function addNode(NodeParent, typeNode) {
	var node = document.createElement(typeNode);
	NodeParent.appendChild(node);
	return node;
}

/**
 * Ajout d'une node input text
 * 
 * @param NodeParent
 *            parent
 * @param id
 *            du noeur
 * @param valeur
 *            valeur
 * @param readO
 *            readonly
 * @returns {___anonymous574_577}
 */
function addInputNode(NodeParent, id, valeur, readO) {
	var node = addNode(NodeParent, "input");
	node.type = 'text';
	node.id = id;
	node.value = valeur;
	if (readO != null) {
		node.disabled = readO;
	}
	return node;
}

function addImgNode(NodeParent, src) {
	var node = addNode(NodeParent, "img");
	node.src = src;
	node.width = 32;
	node.height = 32;
	return node;
}

function addBrNode(NodeParent) {
	var node = addNode(NodeParent, "br");
}

function addTableNode(NodeParent) {
	var node = addNode(NodeParent, "table");
	return node;
}

function addTrNode(NodeParent) {
	var node = addNode(NodeParent, "tr");
	return node;
}
function addThNode(NodeParent) {
	var node = addNode(NodeParent, "th");
	return node;
}

function addTdNode(NodeParent) {
	var node = addNode(NodeParent, "td");
	return node;
}

function addNodeText(NodeParent, text) {
	var node = document.createTextNode(text);
	NodeParent.appendChild(node);
}