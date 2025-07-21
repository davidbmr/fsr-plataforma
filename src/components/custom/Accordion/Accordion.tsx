import React, { useEffect, useState } from "react";
import style from "./Accordion.module.css";
import { Button } from "primereact/button"; 

interface TitleSectionProps {
	titleText?: string;
	isFuncDisable?: boolean;
	children: React.ReactNode;
}

export const Accordion = ({ titleText, children, isFuncDisable }: TitleSectionProps) => {
	const [isDisplayed, setDisplay] = useState<boolean>(true);
	const [isAnimatingOut, setAnimatingOut] = useState<boolean>(false);

	const handleChange = () => {
		if (isDisplayed) {
			setAnimatingOut(true);
			setTimeout(() => {
				setDisplay(false);
				setAnimatingOut(false);
			}, 120); 
		} else {
			setDisplay(true);
		}
	};
	useEffect(() => {
		if (isFuncDisable) {
			setDisplay(true);
		}
	}, [isFuncDisable]);

	return (
		<div className={style.titleSection__container}>
			{isFuncDisable ? null : (
				<Button className={style.titleSection__title} onClick={handleChange}>
					{titleText}
				</Button>
			)}

			{(isDisplayed || isAnimatingOut) && (
				<div className={isAnimatingOut ? style.contentAnimatedOff : style.contentAnimated}>
					{children}
				</div>
			)}
		</div>
	);
};
