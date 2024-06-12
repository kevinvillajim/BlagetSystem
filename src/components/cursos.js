const cursos = {
	curso1: {
		title: "Curso 1",
		content:
			"En este curso veremos el desarrollo de el assdñasdasdklasjd asdasdaskajdlkasd",
		material: [
			{
				title: "Archivo de prueba",
				descripcion: "hola este es un archivo de prueba",
				img: "/curso1.png",
				archivo: "/README.md",
			},
		],
		units: [
			{
				unit: "Unit1",
				url: "#unit1",
				value: 90,
				modules: [
					{modulo: "Modulo1", url: "#modulo1"},
					{modulo: "Modulo2", url: "#modulo2"},
					{modulo: "Modulo3", url: "#modulo3"},
					{modulo: "Modulo4", url: "#modulo4"},
				],
			},
			{
				unit: "Unit2",
				url: "#unit2",
				value: 50,
				modules: [{modulo: "hola", url: "#hola"}],
			},
			{
				unit: "Unit3",
				url: "#unit3",
				value: 10,
				modules: [{modulo: "Soy un módulo", url: "#soyunmodulo"}],
			},
		],
		progress: 10,
	},
};

export default cursos;
