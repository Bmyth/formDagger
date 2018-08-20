$(function(){
	chrome.storage.local.get('_autofill_domain',function(d){
		var s = ".domain p#" + d._autofill_domain;
		$(s).addClass("focused");
	});

	chrome.storage.local.get('_autofill_destination',function(d){
		$(".destination input").val(d._autofill_destination);
	});

	chrome.storage.local.get('_autofill_scenario',function(d){
		$(".scenario").text(d._autofill_scenario);
	});

	chrome.storage.local.get('_autofill_modules',function(d){
		renderModules(d._autofill_modules);
	});

	$('.opt #save').click(saveChangeLocal);

	$('.opt #reset').click(resetAll);

	$('.domain .domain-item').click(changeDomain);

	function renderModules(modules){
		for(var i = 0; i < modules.length; i++){
			var moduleId = modules[i].moduleId;
			var m = $(moduleTemplate).attr('moduleid', moduleId).appendTo($(".modules"));
			m.find(".moduleId").text(moduleId);
			var valueList = modules[i].valueList;
			for(var j = 0; j< valueList.length; j++){
				var key = valueList[j].key;
				var f = $(moduleFieldTemplate).attr('key', key).appendTo(m);
				f.find('.key').text(key);
				f.find('.type').text(valueList[j].type);
				f.find('.value input').val(valueList[j].value);
				f.find('.selector').text(valueList[j].selector);
			}
		}	
	}

	function saveChangeLocal(){
		var domain = $('.domain-item.focused').text();
		var modules = [];

		$(".module-item").each(function(){
			var m = {};
			m.moduleId = $(this).attr('moduleid');
			m.valueList = [];
			$(".module-field", this).each(function(){
				var v = {};
				v.key = $(".key", this).text();
				v.type = $(".type", this).text();
				v.value = $(".value input", this).val();
				v.selector = $(".selector", this).text();
				m.valueList.push(v);
			})
			modules.push(m);
		})
		chrome.storage.local.set({'_autofill_domain': domain}, function(){
			chrome.storage.local.set({'_autofill_destination':$(".destination input").val()}, function(){
				chrome.storage.local.set({'_autofill_scenario':$(".scenario").text()}, function(){
					chrome.storage.local.set({'_autofill_modules':modules}, function(){
						chrome.runtime.sendMessage({formDagger : 'updateStorage'});
						alert('change saved');
					});
				});
			});	
		});
	}

	function resetAll(domain){
		var gen = getGenByDomain(domain);
		chrome.storage.local.set({'_autofill_domain':gen.domain}, function(){
			chrome.storage.local.set({'_autofill_destination':gen.destination}, function(){
				chrome.storage.local.set({'_autofill_scenario':gen.scenario}, function(){
					chrome.storage.local.set({'_autofill_modules':gen.modules}, function(){
						chrome.runtime.sendMessage({formDagger : 'updateStorage'});
						location.reload();		
					});	
				});	
			});	
		});
	}

	function changeDomain(){
		var currentDomain = $(".domain-item.focused").text();
		var newDomain = $(this).text();
		if(currentDomain !== newDomain){
			resetAll(newDomain);
			chrome.browserAction.setBadgeText({text: domainLetter(newDomain)});
		}
	}

	function getGenByDomain(domain){
		if(domain === 'postpaid')
			return postpaidGen;
		if(domain === 'bundles')
			return bundlesOrderGen;
		if(domain === 'prepaid')
			return prepaidGen;
	}

	function domainLetter(domain){
		if(domain === 'postpaid')
			return 'POS';
		if(domain === 'bundles')
			return 'BDL';
		if(domain === 'prepaid')
			return 'PRE';
	}
})

var moduleTemplate = "<div class='module-item'><p class='moduleId'></p></div>";

var moduleFieldTemplate = "<div class='module-field'>" +
							"<p class='key'></p>" +
							"<p class='type'></p>" +
							"<p class='value'><input tyep='text'></p>" +
							"<p class='selector' style='display:none'></p>" +
						"</div>";
