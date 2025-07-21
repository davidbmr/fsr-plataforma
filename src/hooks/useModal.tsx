import { useState } from "react";

export const useModal = (
	customStatus: boolean = false
): {
	status: boolean;
	onChangeStatus: () => void;
} => {
	const [status, setStatus] = useState(customStatus);
	const onChangeStatus = () => {
		setStatus(!status);
	};
	return { status, onChangeStatus };
};
