import Image from "next/image";
import { Inter } from "next/font/google";
import { Seo } from "@/ui/components/seo/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Seo title="Coders Monkeys" description="description" />
      
			<Typography variant="display" component="h1" theme="primary" weight="medium">
				Coders Monkeys
			</Typography>
      <Typography variant="h1" component="h1" theme="gray">
				Coders Monkeys
			</Typography>
      <Typography variant="h2" component="h1" theme="black" weight="medium">
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
				<Button variant="accent" size="small" >Accent</Button>
				<Button variant="secondary" size="small" >Secondary</Button>
				<Button variant="disabled"  size="small" disabled>Disabled</Button>
				<Button variant="outline" size="small" >Outline</Button>
			</div>

      <div className=" flex items-center gap-5 p-10">
				<Button variant="accent">Accent</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="disabled" disabled>Disabled</Button>
				<Button variant="outline">Outline</Button>
			</div>

      <div className=" flex items-center gap-5 p-10">
      <Button variant="accent" size="large" >Accent</Button>
				<Button variant="secondary" size="large" >Secondary</Button>
				<Button variant="disabled"  size="large" disabled>Disabled</Button>
				<Button variant="outline" size="large" >Outline</Button>
			</div>
		</>
	);
}
