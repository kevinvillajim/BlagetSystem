const cursos = [
  {
    title: "Protección de datos",
    content:
      "Este curso abarca los aspectos fundamentales de la protección de datos personales y sus definiciones, así como medidas de protección, destacando su importancia y prevención.",
    img: "/curso1.webp",
    link: "/estudiante/cursos/curso1/unidad1",
    material: [
      {
        title: "Pdf Referencial",
        descripcion:
          "Este archivo es el PDF referencial que se utilizó para la creación del curso.",
        img: "/pdf.webp",
        archivo: "/proteccionDatos.pdf",
      },
    ],
    units: [
      {
        unit: "Unidad 1: Definiciónes Importantes",
        url: "/estudiante/cursos/curso1/unidad1",
        value: 90,
        modules: [
          { modulo: "1.1 Datos Personales", url: "#modulo1" },
          { modulo: "1.2 Datos Sensibles", url: "#modulo2" },
        ],
      },
      {
        unit: "Unidad 2: Integrantes del Sistema de Protección de Datos Personales",
        url: "/estudiante/cursos/curso1/unidad2",
        value: 50,
        modules: [
          { modulo: "2.1 Titular", url: "#hola" },
          {
            modulo: "2.2 Responsable de tratamiento de datos personales",
            url: "#hola",
          },
          {
            modulo: "2.3 Delegado de protección de datos",
            url: "#hola",
          },
          {
            modulo: "2.4 Encargado del tratamiento de datos personales",
            url: "#hola",
          },
          {
            modulo: "2.5 Destinatario",
            url: "#hola",
          },
          {
            modulo: " 2.6 Autoridad de Protección de Datos Personales",
            url: "#hola",
          },
          {
            modulo: "2.7 Consentimiento",
            url: "#hola",
          },
        ],
      },
      {
        unit: "Unidad 3: Derechos del interesado",
        url: "/estudiante/cursos/curso1/unidad3",
        value: 10,
        modules: [
          { modulo: "3.1 Derechos", url: "#soyunmodulo" },
          { modulo: "3.2 Amenazas Actuales", url: "#soyunmodulo" },
          {
            modulo: "3.3 ¿Que hacer para no ser víctimas?",
            url: "#soyunmodulo",
          },
        ],
      },
    ],
    progress: 10,
  },
  {
    title: "Curso 2",
    content:
      "En este curso veremos el desarrollo de el assdñasdasdklasjd asdasdaskajdlkasd",
    img: "/curso1.png",
    link: "/estudiante/cursos/curso1",
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
        value: 10,
        modules: [
          { modulo: "Modulo1", url: "#modulo1" },
          { modulo: "Modulo2", url: "#modulo2" },
          { modulo: "Modulo3", url: "#modulo3" },
          { modulo: "Modulo4", url: "#modulo4" },
        ],
      },
      {
        unit: "Unit2",
        url: "#unit2",
        value: 2,
        modules: [{ modulo: "hola", url: "#hola" }],
      },
      {
        unit: "Unit3",
        url: "#unit3",
        value: 0,
        modules: [{ modulo: "Soy un módulo", url: "#soyunmodulo" }],
      },
    ],
    progress: 10,
  },
  {
    title: "Curso 3",
    content:
      "En este curso veremos el desarrollo de el assdñasdasdklasjd asdasdaskajdlkasd",
    img: "/curso2.png",
    link: "/estudiante/cursos/curso1",
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
          { modulo: "Modulo1", url: "#modulo1" },
          { modulo: "Modulo2", url: "#modulo2" },
          { modulo: "Modulo3", url: "#modulo3" },
          { modulo: "Modulo4", url: "#modulo4" },
        ],
      },
      {
        unit: "Unit2",
        url: "#unit2",
        value: 90,
        modules: [{ modulo: "hola", url: "#hola" }],
      },
      {
        unit: "Unit3",
        url: "#unit3",
        value: 90,
        modules: [{ modulo: "Soy un módulo", url: "#soyunmodulo" }],
      },
    ],
    progress: 10,
  },
  {
    title: "Curso 4",
    content:
      "En este curso veremos el desarrollo de el assdñasdasdklasjd asdasdaskajdlkasd",
    img: "/curso3.png",
    link: "/estudiante/cursos/curso1",
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
        value: 100,
        modules: [
          { modulo: "Modulo1", url: "#modulo1" },
          { modulo: "Modulo2", url: "#modulo2" },
          { modulo: "Modulo3", url: "#modulo3" },
          { modulo: "Modulo4", url: "#modulo4" },
        ],
      },
      {
        unit: "Unit2",
        url: "#unit2",
        value: 100,
        modules: [{ modulo: "hola", url: "#hola" }],
      },
      {
        unit: "Unit3",
        url: "#unit3",
        value: 100,
        modules: [{ modulo: "Soy un módulo", url: "#soyunmodulo" }],
      },
    ],
    progress: 10,
  },
  {
    title: "Curso 2",
    content:
      "En este curso veremos el desarrollo de el assdñasdasdklasjd asdasdaskajdlkasd",
    img: "/curso1.png",
    link: "/estudiante/cursos/curso1",
    material: [
      {
        title: "Protección de datos personales",
        descripcion: "Pdf de referencia para el curso",
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
          { modulo: "Modulo1", url: "#modulo1" },
          { modulo: "Modulo2", url: "#modulo2" },
          { modulo: "Modulo3", url: "#modulo3" },
          { modulo: "Modulo4", url: "#modulo4" },
        ],
      },
      {
        unit: "Unit2",
        url: "#unit2",
        value: 50,
        modules: [{ modulo: "hola", url: "#hola" }],
      },
      {
        unit: "Unit3",
        url: "#unit3",
        value: 10,
        modules: [{ modulo: "Soy un módulo", url: "#soyunmodulo" }],
      },
    ],
    progress: 10,
  },
];

export default cursos;
