var obj = JSON.parse($response.body);

obj=
{
    "success": true,
	"response": {
		"code": null,
		"message": "test"
	}
};

$done({body: JSON.stringify(obj)});

// Descriptions
