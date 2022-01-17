---
sidebar_position: 3
---

# Delete a plan

If a plan is deleted, you can not restore it again 

## Delete plan request structure 

```
{
    "PlanId": int,
    "Signature": string,
    "Unsubscribe": bool
}

```

## Query parameters

**PlanId** : ID of existence plan 
**Signature** : Your signuture ID 
**Unsubscribe** : set **true** to unsubscribe the active subscribers | set **false** to just deactive the plan, without change subscribers status  

## Example of delete a plan
```
{
    "PlanId" : 5732855288168448,
    "Signature":"AAAA-AAAA-AAAA-AAAA-AAAA",
    "Unsubscribe": true    
}
```
