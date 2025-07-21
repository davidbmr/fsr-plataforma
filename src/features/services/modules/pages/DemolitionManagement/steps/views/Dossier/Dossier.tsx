import styles from "./Dossier.module.css";
import { useFormik } from "formik";
import { FileInput } from "@/components/custom/FileInput/FileInput";
import { Button } from "@/components/custom/Button/Button";
import { Divider } from "@/components/custom/Divider/Divider";
import { RadioComponent as Radio } from "@/components/custom/RadioComponent/RadioComponent";
import { Input } from "@/components/custom/Input/Input";
import { DateField } from "@/components/custom/DateField/DateField";
import { Textarea } from "@/components/custom/Textarea/Textarea";
import { Select } from "@/components/custom/Select/Select";
import { Plus } from "lucide-react";
import { useModal } from "@/hooks/useModal";
import { PrimeModal } from "@/components/custom/Dialog/Dialog";
import { Appointment } from "./modals/AppointmentModal/Appointment";

interface FormValues {
	file_submitted: string | null;
	obs_submitted: string | null;
	report_required: string | null;

	income: File | null;
	memory: File | null;
	specs: File | null;
}

export const Dossier = () => {
	const { values, setFieldValue, handleSubmit, handleChange } = useFormik<FormValues>({
		initialValues: {
			file_submitted: null,
			obs_submitted: null,
			report_required: null,
			income: null,
			memory: null,
			specs: null,
		},
		onSubmit: (values) => {
			console.log(values);
		},
	});
	const { onChangeStatus, status } = useModal();
	return (
		<>
			{" "}
			<div className={styles.content}>
				<form noValidate onSubmit={handleSubmit}>
					<div className={styles.container}>
						<div className={styles.subtitle}>
							<p>¿Se ingresó el expediente a la municipalidad?</p>
						</div>
						<div className={styles.radio__container}>
							<Radio
								label="Sí"
								name="file_submitted"
								value={"si"}
								checked={values.file_submitted === "si" ? true : false}
								onChange={handleChange}
							/>
							<Radio
								label="No"
								name="file_submitted"
								value="no"
								checked={values.file_submitted === "no" ? true : false}
								onChange={handleChange}
							/>
						</div>
					</div>
					{values.file_submitted === "si" && (
						<div className={styles.dossier__container}>
							<div className={styles.input__container}>
								<Input label="Número de expediente" placeholder="Ej. EXP-2023-1234" />
								<p>Ingrese el número de expediente asignado por la municipalidad.</p>
							</div>
							<FileInput
								required
								label="Cargo de ingreso"
								description="PDF, DOC, DOCX. (MÁX. 10MB)"
								name="income"
								onChange={setFieldValue}
								value={values.income}
							/>
						</div>
					)}
					<Divider />
					<div>
						<div className={styles.container}>
							<div className={styles.subtitle}>
								<h3>Notificación del Expediente</h3>
								<p>Indique si el proyecto requiere informe vinculante</p>
							</div>
							<div className={styles.inputs__container}>
								<FileInput
									required
									label="Consulta al ministerio"
									description="PDF, DOC, DOCX. (MÁX. 10MB)"
									name="income"
									onChange={setFieldValue}
									value={values.income}
								/>
								<div className={styles.inputs}>
									<DateField label="Fecha de subida" />
									<DateField label="Fecha de recepción" />
									<DateField label="Fecha de emisión" />
								</div>
								<div className={styles.input__container}>
									<DateField label="Fecha de vencimiento del plazo" disabled />
									<p>Calculado automáticamente (10-15 días después de la fecha de recepción).</p>
								</div>
							</div>
						</div>
					</div>
					<Divider />
					<div>
						<div className={styles.container}>
							<div className={styles.subtitle}>
								<h3>Notificación del Expediente</h3>
								<p>Indique si el proyecto requiere informe vinculante</p>
							</div>
							<div className={styles.inputs__container}>
								<div className={styles.inputs__flex}>
									<DateField label="Fecha" />
									<Select label="Con quién" />
								</div>
								<Textarea label="Motivo" />

								<FileInput
									required
									label="Cargo de ingreso"
									description="PDF, DOC, DOCX. (MÁX. 10MB)"
									name="income"
									onChange={setFieldValue}
									value={values.income}
								/>
							</div>
						</div>
					</div>
					<Divider />
					<div className={styles.container}>
						<div className={styles.subtitle}>
							<p>Levantamiento de Observaciones</p>
						</div>
						<div className={styles.radio__container}>
							<Radio
								label="Sí, se presentó el levantamiento"
								name="obs_submitted"
								value={"si"}
								checked={values.obs_submitted === "si" ? true : false}
								onChange={handleChange}
							/>
							<Radio
								label="No se ha presentado aún"
								name="obs_submitted"
								value="no"
								checked={values.obs_submitted === "no" ? true : false}
								onChange={handleChange}
							/>
						</div>
						{values.obs_submitted === "si" && (
							<div className={styles.dossier__container}>
								<div className={styles.input__container}>
									<DateField label="Fecha de presentación" />
								</div>
								<FileInput
									required
									label="Documento relacionado"
									description="PDF, DOC, DOCX. (MÁX. 10MB)"
									name="income"
									onChange={setFieldValue}
									value={values.income}
								/>
							</div>
						)}
					</div>
					<Divider />
					<div>
						<div className={styles.modal__container}>
							<div className={styles.subtitle}>
								<h3>Citas con el equipo técnico del cliente.</h3>
								<p>Registre las reuniones programadas con el equipo técnico</p>
							</div>
							<div>
								<Button
									label="Agregar cita"
									icon={<Plus style={{ paddingRight: "10px" }} />}
									className={styles.button}
									onClick={onChangeStatus}
								/>
							</div>
						</div>
					</div>
					<Divider />
					<div className={styles.footer__button}>
						<Button label="Guardar" />
					</div>
				</form>
			</div>
			<PrimeModal
				children={<Appointment />}
				header="Agregar Cita"
                description="Agregar citas con el equipo técnico del cliente"
				modalStatus={status}
                width={700}
				onHideModal={onChangeStatus}
			/>
		</>
	);
};
