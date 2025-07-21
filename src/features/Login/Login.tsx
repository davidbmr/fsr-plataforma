import styles from "./Login.module.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { Input } from "@/components/custom/Input/Input";
import { Button } from "@/components/custom/Button/Button";
// import { Checkbox } from "@/components/custom/Checkbox/Checkbox";

export const Login = () => {
	const { handleChange, values, errors, handleSubmit } = useFormik<{
		username: string;
		password: string;
	}>({
		initialValues: {
			username: "",
			password: "",
		},
		onSubmit(values) {
			console.log(values);
		},
		validationSchema: validationSchema,
	});
	return (
		<>
			<title>FSR - Inicia Sesión</title>
			<div className={styles.login}>
				<div className={styles.content__img}></div>
				<div className={styles.content__form}>
					<div className={styles.card}>
						<div className={styles.form__title}>
							<h1>Inicio de sesión</h1>
							<p>Ingresa tus credenciales para acceder al sistema</p>
						</div>
						<form noValidate onSubmit={handleSubmit} className={styles.form}>
							<Input
								label="Usuario:"
								value={values.username}
								name="username"
								placeholder="Usuario"
								className={styles.input}
								onChange={handleChange}
								error={!!errors.username}
							/>
							<Input
								label="Password:"
								name="password"
								placeholder="Contraseña"
								value={values.password}
								type="password"
								className={styles.input}
								onChange={handleChange}
								error={!!errors.password}
							/>
							<div className={styles.form__footer}>
								{/* <div>
								<Checkbox label="Recordarme" checked={false} />
							</div> */}
								<Button>Iniciar sesión</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

const validationSchema = yup.object({
	username: yup.string().required(),
	password: yup.string().required(),
});
