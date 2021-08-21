var user = document.getElementById("user");
var repo = document.getElementById("repo");
var branch = document.getElementById("branch");

var from = document.getElementById("from");
var to = document.getElementById("to");

var link = document.getElementById("link");

function addListener(...objects) {
	for(const object of objects) {
		object.addEventListener('input', updateUrl);
		object.addEventListener('propertychange', updateUrl); // for IE8
	}
}

function getUrl(user, repo, branch, from, to) {
	return "https://github.com/" + user + "/" + repo + "/commits/" + branch + "?since=" + from + "&until=" + to;
}

function anyEmpty(...strings) {
	for(const str of strings) {
		if (str == null || str === "")
			return true;
	}
	return false;
}

function updateUrl() {
	if (anyEmpty(user.value, repo.value, branch.value, from.value, to.value)) {
		link.removeAttribute("href");
		link.innerHTML = "Please, fill in all the fields.";
		return;
	}
	let url = getUrl(user.value, repo.value, branch.value, from.value, to.value);
	link.setAttribute("href", url);
	link.innerHTML = url;
}

addListener(user, repo, branch, from, to);