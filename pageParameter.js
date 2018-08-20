var postpaidPage = {
	"moduleContainer": ".tms-module",
	"formContainer" : ".tms-module-form",
	"nextBtn" : ".tms-btn-next"
}

var bundlesPage = {
	"moduleContainer": ".tms-accordion",
	"formContainer" : ".tms-accordion-form",
	"nextBtn" : ".tms-btn-nav"
}

var prepaidPage = {
	"moduleContainer": ".tms-module",
	"formContainer" : ".tms-module-form",
	"nextBtn" : "tms-btn-next"
}

var getPage = function(domain) {
    if(domain === 'postpaid')
        return postpaidPage;
    if(domain === 'bundles')
        return bundlesPage;
	if(domain === 'prepaid')
        return prepaidPage;
}

