var domain;
var gen;
var destination;
var scenario;
var modules;
var toggleFlag = false;

update();
chrome.browserAction.onClicked.addListener(dagger);

function update(){
	setIcon();	
	chrome.storage.local.get('_autofill_domain',function(d){
		if(!d._autofill_domain){
			chrome.storage.local.set({'_autofill_domain':'postpaid'});
			domain = 'postpaid';
		}else{
			domain = d._autofill_domain;
		}

		if(domain === 'postpaid'){
			gen = postpaidGen;
		}else if(domain === 'prepaid'){
			gen = prepaidGen;	
		}
		else if(domain === 'bundles'){
			gen = bundlesOrderGen;
		}

		chrome.browserAction.setBadgeText({text: domainLetter(domain)});
		setDestination();
	});
}

function dagger(){
	toggleFlag = !toggleFlag;
	setIcon();
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    	chrome.tabs.executeScript(tabs[0].id, {file: "jquery.js"});
    	chrome.tabs.executeScript(tabs[0].id, {file: "pageParameter.js"});
		chrome.tabs.executeScript(tabs[0].id, {file: "toggleAutoFill.js"});
    });
}

function setDestination(){
	chrome.storage.local.get('_autofill_destination',function(d){
		if(!d._autofill_destination){
			chrome.storage.local.set({'_autofill_destination':gen.destination});
			destination = gen.destination;
		}else{
			destination = d._autofill_destination;
		}
		setScenario();
	});
}

function setScenario(){
	chrome.storage.local.get('_autofill_scenario',function(d){
		if(!d._autofill_scenario){
			chrome.storage.local.set({'_autofill_scenario':gen.scenario});
			scenario = gen.scenario;
		}else{
			scenario = d._autofill_scenario;
		}
		setModules();
	});	
}

function setModules(){
	chrome.storage.local.get('_autofill_modules',function(d){
		if(!d._autofill_modules){
			chrome.storage.local.set({'_autofill_modules':gen.modules});
			modules = gen.modules;
		}else{
			modules = d._autofill_modules;
		}
	});	
}
	
function domainLetter(domain){
	if(domain === 'postpaid')
		return 'POS';
	if(domain === 'bundles')
		return 'BDL';
	if(domain === 'prepaid')
		return 'PRE';
}

function setIcon(){
	if(toggleFlag){
		chrome.browserAction.setIcon({path:"resource/icon" + "On" + ".png"});	
	}else{
		chrome.browserAction.setIcon({path:"resource/icon" + "Off" + ".png"});
	}
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.formDagger == "autoFillQuery"){
    	sendResponse({toggleFlag: toggleFlag, domain: domain, destination: destination, modules: modules});
  	}else if(request.formDagger == "finish" || request.formDagger == "dead"){
  		toggleFlag = false;
  		setIcon();
  	}else if(request.formDagger == "updateStorage"){
  		update();
  	}
});


