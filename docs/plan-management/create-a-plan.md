---
sidebar_position: 1
---

# Create a Plan

## What is plan
Infact **Plan** is your business plan, which you get subscriptions for it.

Inorder to start getting subscription, you will need at least one Plan.

Any subscriber is realetd to a plan.

## Create Plan URL
```shell
https://recurring-api-fqvtst6pfa-ew.a.run.app/api/v1/plan
```

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
    "Taxable": bool 
  }
```

## Query parameters
  -  **MerchantSignatur**e : Your signuture ID 
  -  **Title** : Business plan Title
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

## Example of add new Plan

```
{
    "MerchantSignature": "AAAA-AAAA-AAAA-AAAA-AAAA",
    "Title": "Ninga Verde",
    "RecurrenceType": "Dynamic",
    "Frequency" : {
        "Type" : "Day",
        "Value" : 15
    },
    "Description": "Revista Ninja. each 15 Days inclusiv 5 free day",
    "GracePeriod": 5,
    "Amount": 14.99,
    "Currency": "RON",
    "InitialPayment": false,
    "Taxable": false 
  }
```
