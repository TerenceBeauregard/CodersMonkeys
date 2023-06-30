import { Breadcrumbs } from "../breadcrumbs/breadcrumbs";
import { Footer } from "../navigation/footer";
import { Navigation } from "../navigation/navigation";

interface Props {
	children: React.ReactNode;
	isDisplayBreadCrumbs?: boolean;
}

export const Layout = ({ children, isDisplayBreadCrumbs = true }: Props) => {
	return (
		<>
			<Navigation />
			{isDisplayBreadCrumbs && <Breadcrumbs />}
			{children}
			<Footer />
		</>
	);
};
