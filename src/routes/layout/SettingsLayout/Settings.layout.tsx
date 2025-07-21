import styles from "./Settings.module.css";
import { CloudAlert, Wrench } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";
import { ContentBox } from "@/components/layout/ContentBox/ContentBox";
import { data, title_data } from "./Data/Settings.routes";

export const Settings = () => {
	const location = useLocation();
	let current_content;
	for (const item of title_data) {
		if (item.href.startsWith("^") && item.href.endsWith("$")) {
			try {
				const regex = new RegExp(item.href);
				if (regex.test(location.pathname)) {
					current_content = item;
					break;
				}
			} catch (e) {
				console.log("Invalid regex in data for settings: ", item.href, e);
			}
		}
	}
	if (!current_content) {
		current_content = title_data.find(
			(item) => !item.href.startsWith("^") && item.href === location.pathname
		);
	}
	return (
		<section className={styles.main}>
			<aside className={styles.aside}>
				<ContentBox title="Configuración" Icon={Wrench} description="">
					<div className={styles.routes}>
						<div className={styles.route_content}>
							{data.map((item, key) => {
								return (
									<div key={key} className={styles.link__content}>
										<Link
											key={key}
											className={styles.link}
											to={item.href}
											replace
											data-isActive={item.href === location.pathname}
										>
											<label>
												<item.icon />
												{item.name}
											</label>
										</Link>
									</div>
								);
							})}
						</div>
					</div>
				</ContentBox>
			</aside>
			<ContentBox
				title={current_content?.name || "Not loaded Yet"}
				Icon={current_content?.icon || CloudAlert}
				description={
					current_content?.description ||
					"If you see this, the content probably didn't load correctly"
				}
			>
				<div className={styles.main__content}>
					<Outlet />
				</div>
			</ContentBox>
		</section>
	);
};
