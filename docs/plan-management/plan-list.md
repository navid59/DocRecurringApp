---
sidebar_position: 2
---

# Plan list

To get list of plans

## Plan list request structure 

```
{
    "Signature": string,
    "PlanStatus": string
}

```

## Plan list filter 
To filter your plan list, set plan status in your request

As default will be return all of your Plans.

- **All**
- **Active**
- **Delete**


## Query parameters

**Signature** : Your signuture ID 
**PlanStatus** : **All**|**Active**|**Delete**

## Example of plan list
```
{
    "Signature":"AAAA-AAAA-AAAA-AAAA-AAAA",
    "PlanStatus": "Active"
}
```
Or
```
{
    "Signature":"AAAA-AAAA-AAAA-AAAA-AAAA"
}
```
