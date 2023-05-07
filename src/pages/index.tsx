import Image from "next/image";
import { Inter } from "next/font/google";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { RiUser3Line } from "react-icons/ri";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Logo } from "@/ui/design-system/logo/logo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Container } from "@/ui/components/container/container";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Footer } from "@/ui/components/navigation/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Seo title="Accueil" description=""/>
			<Navigation />
			<Footer />
		</>
	);
}
