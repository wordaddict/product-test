Purchase receipts
==============================================

A test project for Tr1pp.
----------


Get API running
----------------------------
```
npm run start
```

## Routes

Service NAME     			| END POINT                  | Description
--------------------------- | ---------------------------|---------------------
 Auth                       | /                          |  base Endpoint
                            | /purchases                 | POST   Log a user in
                            | /sales-per-month           | GET   Sales per month
                            | /products                  | GET   Get all products
                            | /update-products           | PUT   Update products per purchase
                        

**Sample Request and Response for purchases:**
```
http://localhost:7500/purchases
#Request
{
	"customer_name": "mike",
	"amount": 300000,
	"products": [{
		"name": "laptop",
		"price": "1220"
	}],
	"msisdn": "0000000333347",
	"supermarket": "abc"
}

#Response
{
    "error": false,
    "message": "purchase logged successfully",
    "data": {
        "products": [
            {
                "name": "laptop",
                "price": "1220"
            }
        ],
        "_id": "5c9264ab3b36131e15d7409e",
        "customer_name": "mike",
        "amount": 300000,
        "msisdn": "0000000333347",
        "supermarket": "abc",
        "userId": "f56519dc-c371-4a8d-af86-468efd1a97f6",
        "createdAt": "2019-03-20T16:04:59.000Z",
        "updatedAt": "2019-03-20T16:04:59.000Z",
        "__v": 0
    }
}
```

**Sample Request and Response for sales-per-month:**
```
localhost:4001/sales-per-month?month=3

Response
{
    "error": false,
    "message": "There are no sales for this month"
}
```

**Sample Request and Response for all products:**
```
localhost:4001/products

Response
{
    "error": false,
    "message": "Total products returned successfully",
    "data": [
        {
            "products": [
                {
                    "name": "laptop",
                    "price": "1220"
                }
            ]
        },
        {
            "products": [
                {
                    "name": "laptop",
                    "price": "1220"
                }
            ]
        }
    ]
}
```

**Sample Request and Response for update products:**
```
localhost:4001/update-products
#Request
{
	"userId": "c1511c02-4cca-411b-8441-3eb75bdcb1d6",
	"products": [{
		"name": "phone",
		"price": "1220"
	}]
}

#Response
{
    "error": false,
    "message": "product updated succesfully",
    "data": {
        "products": [
            {
                "name": "phone",
                "price": "1220"
            }
        ],
        "_id": "5c9264a63b36131e15d7409d",
        "customer_name": "yes",
        "amount": 300000,
        "msisdn": "0000000333347",
        "supermarket": "abc",
        "userId": "c1511c02-4cca-411b-8441-3eb75bdcb1d6",
        "createdAt": "2019-03-20T16:04:54.000Z",
        "updatedAt": "2019-03-20T16:04:54.000Z",
        "__v": 0
    }
}
```

**Environment Variables:**
```
PORT=3000
MONGODB_HOST=localhost
MONGODB_PORT=27017
MONGODB_DATABASE_NAME=''

```