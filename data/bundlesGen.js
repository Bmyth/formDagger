var bundlesOrderGen = {
    "domain" : "bundles",
    "scenario" : "normal order and new customer",
    "destination" : "acc-creditCard",
    "modules" : [
        {
            "moduleId" : "acc-serviceAndSupport",
            "valueList" :  []  
        },
        {
            "moduleId" : "acc-personal",
            "valueList" : [
                {
                    "key" : "title",
                    "value" : "Ms",
                    "type" : "select",
                    "selector" : "#personal\\.title"
                },
                {
                    "key" : "firstName",
                    "value" : "Mirana",
                    "type" : "input",
                    "selector" : "#personal\\.firstName"
                },
                {
                    "key" : "lastName",
                    "value" : "Nightshade",
                    "type" : "input",
                    "selector" : "#personal\\.lastName"
                },
                {
                    "key" : "birthDay",
                    "value" : "6",
                    "type" : "select",
                    "selector" : "#personal\\.dobDay"
                },
                {
                    "key" : "birthMonth",
                    "value" : "2",
                    "type" : "select",
                    "selector" : "#personal\\.dobMonth"
                },
                {
                    "key" : "birthYear",
                    "value" : "1986",
                    "type" : "select",
                    "selector" : "#personal\\.dobYear"
                }
            ]
        },
        {
            "moduleId" : "acc-auth",
            "valueList" : [
                {
                    "key" : "type",
                    "value" : "new",
                    "type" : "check",
                    "selector" : "#auth-none"
                }
            ] 
        },
        {
            "moduleId" : "acc-existing-bundle",
            "valueList" : [
                {
                    "key" : "type",
                    "value" : "new bundle",
                    "type" : "check",
                    "selector" : "#existing-bundle-new"
                }
            ]
        },
        {
            "moduleId" : "acc-broadband",
            "valueList" : [
                {
                    "key" : "type",
                    "value" : "new bundle",
                    "type" : "check",
                    "selector" : "#broadband-new"
                },
                {
                    "key" : "bigpond email",
                    "value" : "ineverplay",
                    "type" : "input",
                    "selector" : "#newUserInputFormUsername"   
                }
            ]
        },
        {
            "moduleId" : "acc-voice",
            "valueList" : [
                {
                    "key" : "type",
                    "value" : "new phone",
                    "type" : "check",
                    "selector" : "#new-phone-line"
                }
            ] 
        },
        {
            "moduleId" : "acc-contact",
            "valueList" : [
               {
                    "key" : "emailAddress",
                    "value" : "sj008009@team.telstra.com",
                    "type" : "input",
                    "selector" : "#contact\\.emailAddress"
                },
                {
                    "key" : "confirmEmailAddress",
                    "value" : "sj008009@team.telstra.com",
                    "type" : "input",
                    "selector" : "#contact\\.confirmEmailAddress"
                },
                {
                    "key" : "phoneNumber",
                    "value" : "0299999999",
                    "type" : "input",
                    "selector" : "#contact\\.phoneNumber"
                }
            ]  
        },
        {
            "moduleId" : "acc-delivery",
            "valueList" : [
               {
                    "key" : "company",
                    "value" : "tw",
                    "type" : "input",
                    "selector" : "#deliveryAddress-care-of"
                },
                {
                    "key" : "full street address",
                    "value" : "320 PITT STREET, SYDNEY, NSW, 2000",
                    "type" : "input",
                    "selector" : "#deliveryLocation-address"
                },
                {
                    "key" : "post-code",
                    "value" : "1234",
                    "type" : "input",
                    "selector" : "#deliveryLocation-postcode"
                }
            ]  
        },
        {
            "moduleId" : "acc-residence",
            "valueList" : [
                {
                    "key" : "status",
                    "value" : "OWNER",
                    "type" : "select",
                    "selector" : "#residence\\.currentAddressStatus"
                },
                {
                    "key" : "lived years",
                    "value" : "3",
                    "type" : "select",
                    "selector" : "#residence\\.currentAddressYears"
                },
                {
                    "key" : "lived months",
                    "value" : "0",
                    "type" : "select",
                    "selector" : "#residence\\.currentAddressMonths"
                },
            ]  
        },
        {
            "moduleId" : "acc-identity",
            "valueList" : [
               {
                    "key" : "driverLicence",
                    "value" : "44332211",
                    "type" : "input",
                    "selector" : "#identity\\.documentId"
                },
                {
                    "key" : "driverLicenceExpiryDay",
                    "value" : "1",
                    "type" : "select",
                    "selector" : "#identity\\.expiryDay"
                },
                {
                    "key" : "driverLicenceExpiryMonth",
                    "value" : "1",
                    "type" : "select",
                    "selector" : "#identity\\.expiryMonth"
                },
                {
                    "key" : "driverLicenceExpiryYear",
                    "value" : "2018",
                    "type" : "select",
                    "selector" : "#identity\\.expiryYear"
                }
            ]  
        },
        {
            "moduleId" : "acc-employment",
            "valueList" : [
               {
                    "key" : "occupationCategory",
                    "value" : "Academic and Research",
                    "type" : "select",
                    "selector" : "#employment\\.occupationCategory"
                },
                {
                    "key" : "occupationCategoryItem",
                    "value" : "Historian",
                    "type" : "check",
                    "selector" : "#occupation_HISTORIAN"
                }
            ]  
        },
        {
            "moduleId" : "acc-appointment",
            "valueList" : []  
        },
        {
            "moduleId" : "acc-orderSummary",
            "valueList" : []  
        },
        {
            "moduleId" : "acc-creditCard",
            "valueList" : [
                {
                    "key" : "card number",
                    "value" : "4444333322221111",
                    "type" : "input",
                    "selector" : "#creditCard\\.cardNumber"
                },
                {
                    "key" : "card name",
                    "value" : "wenbo",
                    "type" : "input",
                    "selector" : "#creditCard\\.nameOnCard"
                },
                {
                    "key" : "expiry month",
                    "value" : "3",
                    "type" : "select",
                    "selector" : "#creditCard\\.expiryMonth"
                },
                {
                    "key" : "expiry year",
                    "value" : "2018",
                    "type" : "select",
                    "selector" : "#creditCard\\.expiryYear"
                },
                {
                    "key" : "Verification code",
                    "value" : "321",
                    "type" : "input",
                    "selector" : "#creditCard\\.cvvNumber"
                }
            ]
        }
    ]
}
