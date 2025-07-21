import styles from "./Header.module.css";
import { useLocation, useNavigate } from "react-router";
import { header_data } from "@/routes/routes_data/header_data";
import { Button } from "@/components/custom/Button/Button";
import { ArrowLeft } from "lucide-react";

interface HeaderProps {
	route?: {
		content_title: string;
		content_description: string;
		href: string;
	};
}

export const Header = ({ route }: HeaderProps) => {
	const location = useLocation();
	const navigate = useNavigate();
	let current_content = undefined;
	for (const item of header_data) {
		if (item.href.startsWith("^") && item.href.endsWith("$")) {
			try {
				const regex = new RegExp(item.href);
				if (regex.test(location.pathname)) {
					current_content = item;
					break;
				}
			} catch (e) {
				console.error("Invalid regex in header_data:", item.href, e);
			}
		}
	}
	if (!current_content) {
		current_content = header_data?.find(
			(item) => !item.href.startsWith("^") && item.href === location.pathname
		);
	}

	const pathSegments = location.pathname.split("/").filter((s) => s.length > 0);
	const HAS_LAST_LOCATION = pathSegments.length > 1;
	const NavigateHandler = () => {
		if (HAS_LAST_LOCATION) {
			if (pathSegments.length > 1) {
				const parentPath = "/" + pathSegments.slice(0, pathSegments.length - 1).join("/");
				navigate(parentPath);
			}
		}
	};

	return (
		<div className={styles.header}>
			<div className={styles.header__content}>
				<div className={styles.title__content}>
					{HAS_LAST_LOCATION && (
						<div className={styles.button__container}>
							<Button
								onClick={NavigateHandler}
								className={styles.button}
								children={<ArrowLeft color="#fff" width={15} height={15} />}
							/>
						</div>
					)}
					<div className={styles.title__container}>
						<h1>{route?.content_title || current_content?.content_title || document.title}</h1>
						<p>{route?.content_description || current_content?.content_description || ""}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
