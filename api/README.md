# Api Clinica - Documentación

Este archivo recopila todos los endpoints de la Api e indica lo que requiere cada endpoint y que devuelve cada uno.

## Endpoints de la ruta _/doctor_:

- `get => /doctor/names` => Devuelve un array con SOLO los nombres de los doctores disponibles; ideal para implementar en la barra de búsqueda un función de autocompletado para sugerencias.

```shell
[
	"Dolores Delano",
	"Maxima Poronga",
	"Jorge Nitales",
	"Tomas Melano"
]
```

- `get => /doctor || /doctor?name=` => Devuelve un array con dotos los doctores de la clínica. Cada elemento del array (objeto), incluye la información asociada sobre, su usuario, especialidades, horarios seteados por los turnos. Este endpoint también puede recibir un nombre para devolver el resultado de la búsqueda de un doctor por nombre.

```shell
[
	{
		"id": 2,
		"dni": 3698754,
		"code": 236514,
		"full_name": "Paco Gerlo",
		"gender": "masculino",
		"age": 25,
		"birthday": "1998-02-06",
		"phone": "631498745",
		"address": "CABA, Argentina",
		"image": "https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png",
		"is_delete": false,
		"is_delivery": false,
		"userId": null,
		"specialities": [
			{
				"id": 2,
				"speciality": "neurología"
			},
			{
				"id": 3,
				"speciality": "psiquiatría"
			}
		],
		"schedules": [],
		"user": null
	},
	{
		"id": 1,
		"dni": 8596745,
		"code": 326475,
		"full_name": "Devora Poronga",
		"gender": "masculino",
		"age": 48,
		"birthday": "1975-12-25",
		"phone": "36958745",
		"address": "San Isidro, Argentina",
		"image": "https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png",
		"is_delete": false,
		"is_delivery": false,
		"userId": null,
		"specialities": [
			{
				"id": 1,
				"speciality": "dermatología"
			}
		],
		"schedules": [
			{
				"id": 1,
				"date": "2023-06-10",
				"hour_start": "08:00",
				"hour_end": "08:30",
				"is_delete": true,
				"ticketMedicalId": 1
			},
			{
				"id": 2,
				"date": "2023-06-10",
				"hour_start": "08:30",
				"hour_end": "09:00",
				"is_delete": true,
				"ticketMedicalId": 2
			},
			{
				"id": 3,
				"date": "2023-06-10",
				"hour_start": "08:30",
				"hour_end": "09:00",
				"is_delete": true,
				"ticketMedicalId": 3
			},
			{
				"id": 4,
				"date": "2023-06-10",
				"hour_start": "08:30",
				"hour_end": "09:00",
				"is_delete": true,
				"ticketMedicalId": 4
			}
		],
		"user": null
	}
]
```

- `get => /doctor/dni` => A este endpoint se envía por body un objeto con el dni del doctor para realizar una búsqueda por DNI y envía un objeto con la info del doctor.

```shell
{
    {
	"id": 2,
	"dni": 3698754,
	"code": 236514,
	"full_name": "Paco Gerlo",
	"gender": "masculino",
	"age": 25,
	"birthday": "1998-02-06",
	"phone": "631498745",
	"address": "CABA, Argentina",
	"image": "https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png",
	"is_delete": false,
	"is_delivery": false,
	"userId": null,
	"specialities": [
		{
			"id": 2,
			"speciality": "neurología"
		},
		{
			"id": 3,
			"speciality": "psiquiatría"
		}
	],
	"schedules": [],
	"user": null
    }
}
```

- `get => /doctor/:id` => Este endpoint recibe por params un id y devuelve un array con un objeto que contiene el doctor con su información.

```shell
[
	{
		"id": 1,
		"dni": 8596745,
		"code": 326475,
		"full_name": "Devora Poronga",
		"gender": "masculino",
		"age": 48,
		"birthday": "1975-12-25",
		"phone": "36958745",
		"address": "San Isidro, Argentina",
		"image": "https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png",
		"is_delete": false,
		"is_delivery": false,
		"userId": null,
		"specialities": [
			{
				"id": 1,
				"speciality": "dermatología"
			}
		],
		"schedules": [
			{
				"id": 2,
				"date": "2023-06-10",
				"hour_start": "08:30",
				"hour_end": "09:00",
				"is_delete": true,
				"ticketMedicalId": 2
			},
			{
				"id": 4,
				"date": "2023-06-10",
				"hour_start": "08:30",
				"hour_end": "09:00",
				"is_delete": true,
				"ticketMedicalId": 4
			},
			{
				"id": 1,
				"date": "2023-06-10",
				"hour_start": "08:00",
				"hour_end": "08:30",
				"is_delete": true,
				"ticketMedicalId": 1
			},
			{
				"id": 3,
				"date": "2023-06-10",
				"hour_start": "08:30",
				"hour_end": "09:00",
				"is_delete": true,
				"ticketMedicalId": 3
			}
		],
		"user": null
	}
]
```

- `post => /doctor` => A este endpoint se envía por body un `objeto` con la info necesaria para crear al doctor.

```shell
{
    "dni": 3698754,
    "code": 236514,
    "full_name": "Paco Gerlo",
    "gender": "masculino",
    "birthday": "1998-02-06",
    "age": 25,
    "phone": 631498745,
    "address": "CABA, Argentina",
    "is_delivery": true,
    "image": "https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png",
    "specialities": ["neurología", "psiquiatría"]
}
```

Devuelve un objeto con la siguiente información:

```shell
{
	"message": "El registro del médico se ha creado exitosamente",
	"doctor_created": {
	"id": 2,
	"dni": 3698754,
	"code": 236514,
	"full_name": "Paco Gerlo",
	"gender": "masculino",
	"age": 25,
	"birthday": "1998-02-06",
	"phone": "631498745",
	"address": "CABA, Argentina",
	"image": "https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png",
	"is_delete": false,
	"userId": null,
	"specialities": [
		{
			"speciality": "neurología"
		},
		{
			"speciality": "psiquiatría"
		}
	]
}
```

- `put => /doctor` => A este endpoint se envía por body un objeto con `id, phone, address, image` para actualizar el doctor. Es importante que si es un dato específico de alguno de estos el que se va a modificar, enviar la info que tenía del resto para que no quede null en la base de datos algún campo.

```shell
{
    "id": 1,
    "phone": 814452551,
    "address": "Rosario, Argentina",
    "image": "https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png"
}
```

- `delete => /doctor/:id/delete` => A este endpoint se envía por params un `id` para buscar el doctor a borrar; setea su atributo `is_delete` como true, impidiendo que pueda mostrarse de nuevo (borrado lógico). Retorna el siguiente mensaje:

```shell
{
	"message": "El Médico fue borrado exitosamente"
}
```

- `delete => /doctor/:id/delSchedule` => A este endpoint se envía por params un `id` para buscar el doctor y a través de él setear el atributo `is_delete` de cada `schedule` asociado como true. de Esta manera desde el front se pueden filtrar los horarios de los doctores y sólo se muestren los que tienen ese atributo en false (borrado lógico). Retorna el siguiente mensaje:

```shell
"Se han borrado los horarios exitosamente"
```
