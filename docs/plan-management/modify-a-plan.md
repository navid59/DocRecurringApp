---
sidebar_position: 5
---

# Modify a plan
Modify an existance plan is possible only & only if you already informed your subscription about the modification.

## Add Plan request structure  

```
{
    "MerchantSignature": string,
    "Title": string,
    "RecurrenceType": string,
    "Frequency" : {
        "Type" : string,
        "Value" : int
    },
    "Description": string,
    "GracePeriod": int,
    "Amount": flot,
    "Currency": string,
    "InitialPayment": bool,
    "Taxable": bool,
    "TermAndConditionAccepted": bool
  }
```

## Query parameters
  -  **PlanId** : ID of existence plan
  -  **Signatur**e : Your signuture ID 
  -  **Title** : Updated business plan Title
  -  **RecurrenceType** : Type of your business plan
  -    **Dynamic** :  To have dynamic payments period. ex. After each **x Day** | After each **x Month**,... 
  -    **Fix** : To have fix payments period. ex. every 15 day of each month. (**Fix Date**) . 
  -  **Frequency** : 
        -  **Type** : the type can be one of the **Year**|**Month**|**Day**
        -  **Value** : number of Year/Month/Day. 

  -  **Description**: Describe your business plan
  -  **GracePeriod**: Number of of free daies 
  -  **Amount** : The value of your plan,
  -  **Currency**: The currency of your plan. (**RON**)
  -  **InitialPayment**: set **True** if payment at subscription time, is mandatory ,
  -  **Taxable**": set **True** if curret Year/Month/Day is not taxable
  -  **TermAndConditionAccepted** : By set **True** you declared, the Updating existence plan is already informed to the subscriptions 

## Example of update a Plan

```
{
    "PlanId": 5732855288168448,
    "Signature": "AAAA-AAAA-AAAA-AAAA-AAAA",
    "Title": "Ninga Negrou",
    "RecurrenceType": "Dynamic",
    "Frequency" : {
        "Type" : "Day",
        "value" : 45
    },
    "Description": "Updated desctiption of the a plan",
    "GracePeriod": 10,
    "Amount": 49,
    "Currency": "RON",
    "InitialPayment": false,
    "Taxable": false ,
    "TermAndConditionAccepted": true
  }
```