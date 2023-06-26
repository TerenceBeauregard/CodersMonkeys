import { LinkTypes } from "@/lib/link-type";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const CodersMonkeysSlackView = () => {
	return (
		<Container className="flex justify-between">
			<div className="flex flex-col justify-center max-w-2xl space-y-5">
				<div className="flex items-center">
					<Logo size="very-small" />
					<Typography
						variant="caption2"
						component="span"
						weight="medium"
					>
						Coders Monkeys
					</Typography>
				</div>
				<Typography variant="h2" component="h2">
					Rejoins-nous sur le slack des singes codeurs
				</Typography>
				<Typography
					variant="body-lg"
					component="p"
					theme="gray"
					className="max-w-lg"
				>
					Rejoins-nous et obtien de l'aide, des conseils et pourquoi
					pas des nouveaux potes !
				</Typography>
				<Button baseUrl="/#" linkType={LinkTypes.EXTERNAL}>
					Rejoins le groupe
				</Button>
			</div>
			<div className="relative w-[600px] h-[600px]">
				<Image
					fill
					src={"/assets/svg/logo-slack.svg"}
					alt="illustration du logo slack"
				/>
			</div>
		</Container>
	);
};
