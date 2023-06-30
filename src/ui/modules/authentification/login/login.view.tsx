import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "./login.form";
import { FormType } from "@/types/forms";

interface Props {
	form: FormType;
}

export const LoginView = ({form}: Props) => {
	return (
		<Container className="grid grid-cols-2 gap-20 mb-32">
			<div className="flex items-center">
				<div className="relative w-full h-[531px]">
					<Image
						fill
						src="/assets/images/character-2.png"
						alt="Personnage en 3d"
						className="object-scale-down"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<Box padding_y="py-5">
					<div className="flex items-center justify-between">
						<Typography variant="h5" component="h1">
							Connexion
						</Typography>
						<div className="flex items-center gap-2">
							<Typography
								variant="caption4"
								component="span"
								theme="gray"
							>
								Tu n'as pas de compte ?
							</Typography>
							<Typography
								variant="caption4"
								component="span"
								theme="primary"
							>
								<Link href="/connexion/inscription">
									S'inscrire
								</Link>
							</Typography>
						</div>
					</div>
					<LoginForm form={form}/>
				</Box>
			</div>
		</Container>
	);
};
