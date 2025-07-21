/// <reference types="vite/client" />
import type { StepperOptionsProps } from "./components/custom/Stepper/Stepper";

type BuildTuple<L extends number, T extends number[] = []> = T["length"] extends L
	? T
	: BuildTuple<L, [...T, number]>;

type Range<
	Limit extends number,
	T extends number[] = [],
	Acc extends number = never
> = T["length"] extends Limit
	? Acc | Limit
	: Range<Limit, [...T, number], Acc | (T["length"] extends 0 ? never : T["length"])>;


interface RenderDocumentProps extends StepperOptionsProps {
	title: string;
	description: string;
	children: ReactNode;
	state: "Completado" | "En Progreso" | "Pendiente";
}

type LucideIconType = ForwardRefExoticComponent<
	Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;
