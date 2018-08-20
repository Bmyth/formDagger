var prepaidGen = {
    "domain" : "prepaid",
    "scenario" : "new customer fast fill",
    "destination" : "acc-creditCard",
    "modules" : [
        {
            "moduleId" : "acc-security",
            "valueList" :  [
				{
                    "key" : "confirmation",
                    "value" : "true",
                    "type" : "check",
                    "selector" : "#acknowledgementConfirmed"
                }
			]  
        },
        {
            "moduleId" : "acc-whatYouNeed",
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
            "moduleId" : "acc-numberDetails",
            "valueList" : [
                {
                    "key" : "numberType",
                    "value" : "NEW",
                    "type" : "check",
                    "selector" : "#numberDetails-new"
                }
            ] 
        },
        {
            "moduleId" : "acc-activation",
            "valueList" :  [
			    {
                    "key" : "type",
                    "value" : "N",
                    "type" : "check",
                    "selector" : "#activate_n"
                }
			]  
        },
        {
            "moduleId" : "acc-identity",
            "valueList" : [
			    {
                    "key" : "identityType",
                    "value" : "AUS_DRIVER_LICENCE",
                    "type" : "select",
                    "selector" : "#identity\\.documentType"
                },
                {
                    "key" : "driverLicence",
                    "value" : "44332211",
                    "type" : "input",
                    "selector" : "#identity\\.driverLicence\\.licenceNumber"
                },
				{
                    "key" : "issueState",
                    "value" : "NSW",
                    "type" : "select",
                    "selector" : "#identity\\.driverLicence\\.stateOfIssue"
                },
                {
                    "key" : "driverLicenceExpiryDay",
                    "value" : "1",
                    "type" : "select",
                    "selector" : "#identity\\.driverLicence\\.expiryDay"
                },
                {
                    "key" : "driverLicenceExpiryMonth",
                    "value" : "1",
                    "type" : "select",
                    "selector" : "#identity\\.driverLicence\\.expiryMonth"
                },
                {
                    "key" : "driverLicenceExpiryYear",
                    "value" : "2018",
                    "type" : "select",
                    "selector" : "#identity\\.driverLicence\\.expiryYear"
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
                    "value" : "10 High Street, Jamestown, SA, 5149",
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
            "moduleId" : "acc-summary",
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
                    "value" : "kim",
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
