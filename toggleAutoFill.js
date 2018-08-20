var specialFill = {
    "acc-homeAddress" : function(){
        $("#homeAddressForm #homeAddressAuto").val(getValueByModuleIdAndKey("acc-homeAddress", "homeAddress"));
        if($("#homeAddressForm .tms-addr-picker").css('display') === 'block'){
            $("#contact-addr-select").val(getValueByModuleIdAndKey("acc-homeAddress", "homeAddressConfirmIndex"));    
        }
    },
    "acc-broadband" : function(){
        $("#broadband-form #broadband-new").click();
        $("#broadband-form #newUserInputFormUsername").val('asdf');
    },
    "acc-orderSummary" : function(){
        if($("#acc-orderSummary #btnNext-acc-orderSummary").get(0))
            $("#acc-orderSummary #btnNext-acc-orderSummary").click();
        if($("#acc-orderSummary #btnTandC").get(0))
            $("#acc-orderSummary #btnTandC").click();

        setTimeout(function(){
            $("#tmsLBTandC #btnTandCAccept").click();
            setTimeout(function(){
                goToNextAfter($("#acc-orderSummary"));    
            }, 1000)
        }, 1000);
        return true;
    }
}

var domain;
var destination;
var modules;
var page;
var toggleFlag;

$(document).keypress(function(e){
    if(e.ctrlKey && e.which == 17) {
        chrome.runtime.sendMessage({formDagger : 'toggle'}, function(response) {
            alert(response.flag);
        });
    }
});

chrome.runtime.sendMessage({formDagger : 'autoFillQuery'}, function(response) {
    domain = response.domain;
    destination = response.destination;
    modules = response.modules;
    toggleFlag = response.toggleFlag;
    page = getPage(domain);
    if(toggleFlag){
        fillOpenAccordion();     
    }
});

function fillOpenAccordion(){
    if(!toggleFlag)
        return;
    
    var openModule = $(page.formContainer + ":visible").closest(page.moduleContainer);
    var openAccordionId = $(openModule).attr("id");

    if(openAccordionId === destination){
        fillWith(openAccordionId);
        chrome.runtime.sendMessage({formDagger : 'finish'}); 
        return;
    }
    goToNextAfter(fillWith(openAccordionId));
}

function fillWith(openAccordionId){
    var module = "#" + openAccordionId;
    module = $(module);

    if(specialFill[openAccordionId]){
        if(specialFill[openAccordionId]())
            return 0;  
    }else{
        var moduleData = getModuleDataById(openAccordionId);
        if(moduleData){
            var valueList = moduleData.valueList;
            for(var i = 0; i < valueList.length; i++){
                var v = valueList[i];
                if(v.type === "select" || v.type === "input"){
                    $(v.selector, module).val(v.value).change();   
                }else if(v.type === "check"){
                    var s = getCheckSelector(openAccordionId, v.key, module);
                    $(s, module).click();
                }
            }  
        }
    }
    return module;
}

function goToNextAfter(module){
    if(module === 0)
        return;
    $(page.nextBtn, module).click();

    var triedTimes = 0;
    var iID = setInterval(closeModule,250);

    function closeModule(){
        if($(page.formContainer, module).css('display') === 'none'){
            clearInterval(iID);
            fillOpenAccordion();
            return;
        }else if(triedTimes == 40){
            clearInterval(iID);
            chrome.runtime.sendMessage({formDagger : 'dead'});
            return; 
        }
        $(".tms-btn-next", module).click(); 
        triedTimes++;
    }       
}

function getModuleDataById(moduleId){
    var moduleData;
    for(var i = 0; i < modules.length; i++){
        if(modules[i].moduleId === moduleId){
            moduleData = modules[i];
            break;
        }
    }
    return moduleData;
}

function getValueByModuleIdAndKey(moduleId, key){
    var moduleData = getModuleDataById(moduleId);
    var value;
    if(moduleData){
        var valueList = moduleData.valueList;
        for(var i = 0; i < valueList.length; i++){
            var v = valueList[i];
            if(v.key === key){
                value = v.value;   
            }       
        }
    }
    return value;
}

function getCheckSelector(moduleId, key, moduleEle){
    var moduleData = getModuleDataById(moduleId);
    var selector;
    var v;
    if(moduleData){
        var valueList = moduleData.valueList;
        for(var i = 0; i < valueList.length; i++){
            if(valueList[i].key === key){
                v = valueList[i]; 
                break;  
            }       
        }
    }
    if(v){
        var s = "input[title='" + v.value + "']";
        if($(s, moduleEle).get(0)){
            return s;
        }

        s = "input[value='" + v.value + "']";
        if($(s, moduleEle).get(0)){
            return s;
        }
        return v.selector;
    }
    return selector;
}

