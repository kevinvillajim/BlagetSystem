export const sideBarOptions = {
	admin: [
		{link: "/admin/alumnos", icon: "groups", name: "Alumnos"},
		{link: "/admin/clases", icon: "menu_book", name: "Clases"},

		{
			link: "/admin/usuarios",
			icon: "manage_accounts",
			name: "Usuarios",
		},
		// {link: "/admin/tareas", icon: "checklist", name: "Tareas"},
		// {
		// 	link: "/admin/finanzas",
		// 	icon: "attach_money",
		// 	name: "Finanzas",
		// },
		// {
		// 	link: "/admin/certificados",
		// 	icon: "military_tech",
		// 	name: "Certificados",
		// },
		// {
		// 	link: "/admin/maestros",
		// 	icon: "co_present",
		// 	name: "Maestros",
		// },
	],
	Profesor: [
		{
			link: "/usuarios",
			icon: "manage_accounts",
			name: "Usuarios",
		},
		{link: "/teams", icon: "groups", name: "Teams"},
		{link: "/metas", icon: "military_tech", name: "Metas"},
		{link: "/tareas", icon: "checklist", name: "Tareas"},
		{
			link: "/finanzas",
			icon: "attach_money",
			name: "Finanzas",
		},
		{link: "/citas", icon: "menu_book", name: "Citas"},
		{link: "/clientes", icon: "hail", name: "Clientes"},
		{
			link: "/proveedores",
			icon: "local_shipping",
			name: "Proveedores",
		},
		{
			link: "/productos",
			icon: "package_2",
			name: "Productos",
		},
		{
			link: "/inventario",
			icon: "inventory_2",
			name: "Inventario",
		},
		{
			link: "/proformas",
			icon: "request_quote",
			name: "Proformas",
		},
	],
	Estudiante: [
		{link: "/estudiante/dashboard", icon: "menu_book", name: "Dashboard"},
		// { link: "/estudiante/tareas", icon: "checklist", name: "Tareas" },
		{
			link: "/estudiante/certificados",
			icon: "military_tech",
			name: "Certificados",
		},
	],
};
