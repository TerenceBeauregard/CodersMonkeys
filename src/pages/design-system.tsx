// COMPONENT
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

//DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

// ICO
import { RiUser3Line } from "react-icons/ri";

export default function DesignSystem() {
	return (
		<>
			<Seo title="design-system" description="" />
			<Layout>
				<Container>
					<div className="flex">
						<Avatar
							src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash 1.png"
							alt="Avatar de daniel lincoln"
							size="small"
						/>
						<Avatar
							src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash 1.png"
							alt="Avatar de daniel lincoln"
						/>
						<Avatar
							src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash 1.png"
							alt="Avatar de daniel lincoln"
							size="large"
						/>
					</div>
					<div className="flex">
						<Logo size="very-small" />
						<Logo size="small" />
						<Logo />
						<Logo size="large" />
						<Seo title="Coders Monkeys" description="description" />
					</div>

					<Typography
						variant="display"
						component="h1"
						theme="primary"
						weight="medium"
					>
						Coders Monkeys
					</Typography>
					<Typography variant="h1" component="h1" theme="gray">
						Coders Monkeys
					</Typography>
					<Typography
						variant="h2"
						component="h1"
						theme="black"
						weight="medium"
					>
						Coders Monkeys
					</Typography>
					<Typography variant="h3" component="h1" theme="secondary">
						Coders Monkeys
					</Typography>
					<Typography variant="h4" component="h1">
						Coders Monkeys
					</Typography>
					<Typography variant="h5" component="h1">
						Coders Monkeys
					</Typography>

					<div className=" flex items-center gap-5 p-10">
						<Button variant="accent" size="small">
							Accent
						</Button>
						<Button variant="secondary" size="small">
							Secondary
						</Button>
						<Button variant="disabled" size="small" disabled>
							Disabled
						</Button>
						<Button variant="outline" size="small">
							Outline
						</Button>
						<Button
							variant="ico"
							size="small"
							icon={{ icon: RiUser3Line }}
						/>
					</div>

					<div className=" flex items-center gap-5 p-10">
						<Button variant="accent">Accent</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="disabled" disabled>
							Disabled
						</Button>
						<Button variant="outline">Outline</Button>
						<Button
							variant="ico"
							size="medium"
							icon={{ icon: RiUser3Line }}
						/>
						<Button variant="accent" icon={{ icon: RiUser3Line }}>
							Accent
						</Button>
						<Button
							variant="accent"
							icon={{ icon: RiUser3Line }}
							iconPosition="left"
						>
							Accent
						</Button>
					</div>

					<div className=" flex items-center gap-5 p-10">
						<Button variant="accent" size="large">
							Accent
						</Button>
						<Button variant="secondary" size="large">
							Secondary
						</Button>
						<Button variant="disabled" size="large" disabled>
							Disabled
						</Button>
						<Button variant="outline" size="large">
							Outline
						</Button>
						<Button
							variant="ico"
							size="large"
							icon={{ icon: RiUser3Line }}
							iconTheme="accent"
						/>
						<Button
							variant="ico"
							size="large"
							icon={{ icon: RiUser3Line }}
							iconTheme="secondary"
						/>
						<Button
							variant="ico"
							size="large"
							icon={{ icon: RiUser3Line }}
							iconTheme="gray"
						/>
					</div>

					<div className=" flex items-center gap-5 p-10">
						<Button isLoading variant="accent" size="large">
							Accent
						</Button>
						<Button isLoading variant="secondary" size="large">
							Secondary
						</Button>
						<Button
							isLoading
							variant="disabled"
							size="large"
							disabled
						>
							Disabled
						</Button>
						<Button isLoading variant="outline" size="large">
							Outline
						</Button>
						<Button
							isLoading
							variant="ico"
							size="large"
							icon={{ icon: RiUser3Line }}
							iconTheme="accent"
						/>
						<Button
							isLoading
							variant="ico"
							size="large"
							icon={{ icon: RiUser3Line }}
							iconTheme="secondary"
						/>
						<Button
							isLoading
							variant="ico"
							size="large"
							icon={{ icon: RiUser3Line }}
							iconTheme="gray"
						/>
					</div>

					<div className="flex items-center gap-4 p-10">
						<Spinner size="small" />
						<Spinner size="medium" />
						<Spinner size="large" />
					</div>
				</Container>
			</Layout>
		</>
	);
}
