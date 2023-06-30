import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import { useRouter } from "next/router";
import { RiHome3Fill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { Container } from "../container/container";
import Link from "next/link";

// composant fil d'ariane
export const Breadcrumbs = () => {
	const router = useRouter();
	const asPath = router.asPath;
	const segments = asPath.split("/");
	const lastSegment = segments[segments.length - 1];
	segments[0] = "accueil";
	const view = segments.map((path, index) => (
        <Link href={index > 0 ? `/${segments.slice(1, index + 1).join("/")}` : `/`}>
		<div key={uuidv4()}>
			<Typography
				variant="caption3"
				component="span"
				className={clsx(
					path !== lastSegment ? "text-gray-600" : "text-gray",
					"capitalize hover:text-gray animate"
				)}
			>
				{path !== "accueil" ? path.replace(/-/g, " ") : <RiHome3Fill className="inline -mt-1"/>}
			</Typography>
			{path !== lastSegment && (
				<Typography
					variant="caption2"
					component="span"
					className="ml-2 text-gray-600"
				>
					/
				</Typography>
			)}
		</div>
        </Link>
	));
	return (
		<Container className="flex items-center gap-2 py-7">{view}</Container>
	);
};
