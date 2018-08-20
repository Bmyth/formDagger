var postpaidGen = {
    "domain" : "postpaid",
    "scenario" : "new customer fast fill",
    "destination" : "acc-creditCard",
    "modules" : [
        {
            "moduleId" : "acc-whatYouNeed",
            "valueList" :  []  
        },
        {
            "moduleId" : "acc-byoOptions",
            "valueList" :  [
                {
                    "key" : "SIM card type",
                    "value" : "Other (micro sim)",
                    "type" : "check",
                    "selector" : ".tms-input-radio:nth-child(4)"
                }
            ]  
        },
        {
            "moduleId" : "acc-handsetOptions",
            "valueList" :  []  
        },
        {
            "moduleId" : "acc-sharedDataPlan",
            "valueList" :  []  
        },
        {
            "moduleId" : "acc-addons",
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
            "moduleId" : "acc-numberChoice",
            "valueList" : [
                {
                    "key" : "type",
                    "value" : "new",
                    "type" : "check",
                    "selector" : "#numberChoice-new"
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
            "moduleId" : "acc-homeAddress",
            "valueList" : [
               {
                    "key" : "homeAddress",
                    "value" : "High Street, Jamestown, SA, 5149",
                    "type" : "input",
                    "selector" : "#homeAddressAuto"
                },
                {
                    "key" : "homeAddressConfirmIndex",
                    "value" : "1",
                    "type" : "select",
                    "selector" : ".tms-addr-picker"
                }
            ]  
        },
        {
            "moduleId" : "acc-residence",
            "valueList" : [
               {
                    "key" : "currentAddressYears",
                    "value" : "3",
                    "type" : "select",
                    "selector" : "#residence\\.currentAddressYears"
                },
                {
                    "key" : "currentAddressMonths",
                    "value" : "0",
                    "type" : "select",
                    "selector" : "#residence\\.currentAddressMonths"
                }
            ]  
        },
        {
            "moduleId" : "acc-delivery",
            "valueList" : [
               {
                    "key" : "delivery to",
                    "value" : "deliver to home",
                    "type" : "check",
                    "selector" : "#delivery\\.deliverToHome"
                }
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
                    "key" : "Occupation category",
                    "value" : "Academic and Research",
                    "type" : "select",
                    "selector" : "#employment\\.occupationCategory"
                },
                {
                    "key" : "occupationCategoryItem",
                    "value" : "Academic and Research",
                    "type" : "check",
                    "selector" : "#occupation_HISTORIAN"
                },
                {
                    "key" : "employer name",
                    "value" : "grubby",
                    "type" : "input",
                    "selector" : "#employment\\.employerName"   
                },
                {
                    "key" : "employer phone number",
                    "value" : "12345678",
                    "type" : "input",
                    "selector" : "#employment\\.employerPhoneNumber"   
                },
                {
                    "key" : "employer years",
                    "value" : "3",
                    "type" : "select",
                    "selector" : "#employment\\.yearsWithEmployer"   
                },
                {
                    "key" : "employer months",
                    "value" : "0",
                    "type" : "select",
                    "selector" : "#employment\\.monthsWithEmployer"   
                },
            ]  
        },
        {
            "moduleId" : "acc-billing",
            "valueList" : [
                {
                    "key" : "receive bill type",
                    "value" : "new email bill",
                    "type" : "check",
                    "selector" : "#billing-new"
                }
            ]  
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
