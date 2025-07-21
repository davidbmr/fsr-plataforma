import "./index.css";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/AppRoutes";
import { addLocale, locale, PrimeReactProvider } from "primereact/api";

function App() {
	locale("es");
	addLocale("es", {
		firstDayOfWeek: 1,
		dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
		dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
		dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
		monthNames: [
			"enero",
			"febrero",
			"marzo",
			"abril",
			"mayo",
			"junio",
			"julio",
			"agosto",
			"septiembre",
			"octubre",
			"noviembre",
			"diciembre",
		],
		monthNamesShort: [
			"ene",
			"feb",
			"mar",
			"abr",
			"may",
			"jun",
			"jul",
			"ago",
			"sep",
			"oct",
			"nov",
			"dic",
		],
		today: "Hoy",
		clear: "Limpiar",
		dateFormat: "dd/mm/yy",
		weekHeader: "Sem",
	});

	return (
		<PrimeReactProvider value={{ locale: "es" }}>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</PrimeReactProvider>
	);
}

export default App;
