const cursos = [
	{
		id: 0,
		title: "Protección de datos",
		content:
			"Este curso abarca los aspectos fundamentales de la protección de datos personales y sus definiciones, así como medidas de protección, destacando su importancia y prevención.",
		img: "/curso4.png",
		link: "/estudiante/cursos/curso1",
		material: [
			{
				title: "Pdf Referencial",
				descripcion:
					"Este archivo es el PDF referencial que se utilizó para la creación del curso.",
				img: "/pdf.webp",
				archivo: "/proteccionDatos.pdf",
			},
			{
				title: "Ley Organica de Protección de Datos Personales",
				descripcion: "Ley actualizada y vigente, aprobada en mayo de 2021",
				img: "/pdf.webp",
				archivo: "/lopdp.pdf",
			},
		],
		units: [
			{
				unit: "Unidad 1: Definiciónes Importantes",
				url: "/estudiante/cursos/curso1/unidad1",
				value: "Unidad1",
				modules: [
					{
						modulo: "1.1 Datos Personales",
						url: "/estudiante/cursos/curso1/unidad1#modulo1",
					},
					{
						modulo: "1.2 Datos Sensibles",
						url: "/estudiante/cursos/curso1/unidad1#modulo2",
					},
				],
			},
			{
				unit: "Unidad 2: Integrantes del Sistema de Protección de Datos Personales",
				url: "/estudiante/cursos/curso1/unidad2",
				value: "Unidad2",
				modules: [
					{
						modulo: "2.1 Titular",
						url: "/estudiante/cursos/curso1/unidad2#modulo1",
					},
					{
						modulo: "2.2 Responsable de tratamiento de datos personales",
						url: "/estudiante/cursos/curso1/unidad2#modulo2",
					},
					{
						modulo: "2.3 Delegado de protección de datos",
						url: "/estudiante/cursos/curso1/unidad2#modulo3",
					},
					{
						modulo: "2.4 Encargado del tratamiento de datos personales",
						url: "/estudiante/cursos/curso1/unidad2#modulo4",
					},
					{
						modulo: "2.5 Destinatario",
						url: "/estudiante/cursos/curso1/unidad2#modulo5",
					},
					{
						modulo: " 2.6 Autoridad de Protección de Datos Personales",
						url: "/estudiante/cursos/curso1/unidad2#modulo6",
					},
					{
						modulo: "2.7 Consentimiento",
						url: "/estudiante/cursos/curso1/unidad2#modulo7",
					},
				],
			},
			{
				unit: "Unidad 3: Derechos del interesado",
				url: "/estudiante/cursos/curso1/unidad3",
				value: "Unidad3",
				modules: [
					{
						modulo: "3.1 Derechos",
						url: "/estudiante/cursos/curso1/unidad3#modulo1",
					},
					{
						modulo: "3.2 Amenazas Actuales",
						url: "/estudiante/cursos/curso1/unidad3#modulo2",
					},
					{
						modulo: "3.3 ¿Que hacer para no ser víctimas?",
						url: "/estudiante/cursos/curso1/unidad3#modulo3",
					},
				],
			},
		],
	},
	// {
	// 	title: "Curso Ejemplo 2",
	// 	content:
	// 		"Este curso abarca los aspectos fundamentales de la protección de datos personales y sus definiciones, así como medidas de protección, destacando su importancia y prevención.",
	// 	img: "/curso1.webp",
	// 	link: "/estudiante/cursos/curso1",
	// 	material: [
	// 		{
	// 			title: "Pdf Referencial",
	// 			descripcion:
	// 				"Este archivo es el PDF referencial que se utilizó para la creación del curso.",
	// 			img: "/pdf.webp",
	// 			archivo: "/proteccionDatos.pdf",
	// 		},
	// 		{
	// 			title: "Ley Organica de Protección de Datos Personales",
	// 			descripcion: "Ley actualizada y vigente, aprobada en mayo de 2021",
	// 			img: "/pdf.webp",
	// 			archivo: "/lopdp.pdf",
	// 		},
	// 	],
	// 	units: [
	// 		{
	// 			unit: "Unidad 1: Definiciónes Importantes",
	// 			url: "/estudiante/cursos/curso1/unidad1",
	// 			value: "Unidad1",
	// 			modules: [
	// 				{
	// 					modulo: "1.1 Datos Personales",
	// 					url: "/estudiante/cursos/curso1/unidad1#modulo1",
	// 				},
	// 				{
	// 					modulo: "1.2 Datos Sensibles",
	// 					url: "/estudiante/cursos/curso1/unidad1#modulo2",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			unit: "Unidad 2: Integrantes del Sistema de Protección de Datos Personales",
	// 			url: "/estudiante/cursos/curso1/unidad2",
	// 			value: "Unidad2",
	// 			modules: [
	// 				{
	// 					modulo: "2.1 Titular",
	// 					url: "/estudiante/cursos/curso1/unidad2#modulo1",
	// 				},
	// 				{
	// 					modulo: "2.2 Responsable de tratamiento de datos personales",
	// 					url: "/estudiante/cursos/curso1/unidad2#modulo2",
	// 				},
	// 				{
	// 					modulo: "2.3 Delegado de protección de datos",
	// 					url: "/estudiante/cursos/curso1/unidad2#modulo3",
	// 				},
	// 				{
	// 					modulo: "2.4 Encargado del tratamiento de datos personales",
	// 					url: "/estudiante/cursos/curso1/unidad2#modulo4",
	// 				},
	// 				{
	// 					modulo: "2.5 Destinatario",
	// 					url: "/estudiante/cursos/curso1/unidad2#modulo5",
	// 				},
	// 				{
	// 					modulo: " 2.6 Autoridad de Protección de Datos Personales",
	// 					url: "/estudiante/cursos/curso1/unidad2#modulo6",
	// 				},
	// 				{
	// 					modulo: "2.7 Consentimiento",
	// 					url: "/estudiante/cursos/curso1/unidad2#modulo7",
	// 				},
	// 			],
	// 		},
	// 		{
	// 			unit: "Unidad 3: Derechos del interesado",
	// 			url: "/estudiante/cursos/curso1/unidad3",
	// 			value: "Unidad3",
	// 			modules: [
	// 				{
	// 					modulo: "3.1 Derechos",
	// 					url: "/estudiante/cursos/curso1/unidad3#modulo1",
	// 				},
	// 				{
	// 					modulo: "3.2 Amenazas Actuales",
	// 					url: "/estudiante/cursos/curso1/unidad3#modulo2",
	// 				},
	// 				{
	// 					modulo: "3.3 ¿Que hacer para no ser víctimas?",
	// 					url: "/estudiante/cursos/curso1/unidad3#modulo3",
	// 				},
	// 			],
	// 		},
	// 	],
	// 	progress: 10,
	// },
];

export default cursos;
