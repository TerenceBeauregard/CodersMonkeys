import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image"; 
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { AppLinks, FooterLinks } from "@/types/app-links";
import { LinkType, LinkTypes } from "@/lib/link-type";
import { footerLinks } from "./app-links";

export const Footer = () => {
	const currentYear = new Date().getFullYear();

    const footerNavigationList = footerLinks.map((coloneLinks) => (
		<FooterLink key={uuidv4()} data={coloneLinks} />
	));

	return (
		<div className="bg-gray">
			<Container className="flex justify-between pt-16">
				<div className="flex flex-col items-center gap-1">
					<Typography
						variant="caption1"
						theme="white"
						weight="medium"
					>
						Formations gratuites
					</Typography>
					<Typography variant="caption3" theme="gray">
						Abonne toi à la chaine
					</Typography>
					<a href="https://youtube.com" target="_blank">
						<Image
							src="/assets/svg/YTB.svg"
							width={229}
							height={216}
							alt=""
						/>
					</a>
				</div>
				<div className="flex gap-7">{footerNavigationList}</div>
			</Container>
			<Container className="pt-9 pb-11 space-y-11">
				<hr className="text-gray-800" />
				<div className="flex items-center justify-between">
					<Typography variant="caption4" theme="gray">
						{`Copyright © ${currentYear} | Propulsed by `}
						<a
							href="https://terencebeauregard.github.io/TerenceChouxBeauregard/index.html"
							target="_blank"
							className="underline"
						>
							Arnaud desportes
						</a>
						{` - Remote monkey SASU`}
					</Typography>
					<div className=""></div>
				</div>
			</Container>
		</div>
	);
};

interface footerLinkProps{
	data: FooterLinks;
}

const FooterLink = ({data}: footerLinkProps) => {
	const linksList = data.links.map((link) => (
		<div key={uuidv4()}>
            {link.type === LinkTypes.INTERNAL && (
                <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
            )}
            {link.type === LinkTypes.EXTERNAL && (
                 <a href={link.baseUrl} target="_blank">{link.label}</a>
            )}
        </div>
        
	));
	return (
		<div className="min-w-[190px]">
			<Typography
				theme="white"
				variant="caption2"
				weight="medium"
				className="pb-5"
			>
				{data.label}
			</Typography>
			<Typography
				theme="gray"
				variant="caption3"
				className="space-y-4"
			>
                {linksList}
            </Typography>
		</div>
	);
};
