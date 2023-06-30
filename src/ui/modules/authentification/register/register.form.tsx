import { FormType } from "@/types/forms";
import { Button } from "@/ui/design-system/button/button";
import { Input } from "@/ui/design-system/forms/input";

interface Props {
	form: FormType;
}

export const RegisterForm = ({ form }: Props) => {
	const { onSubmit, errors, isLoading, register, handleSubmit } =
		form;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
			<Input
				isLoading={isLoading}
				placeholder="johndoe@mail.com"
				type="email"
				register={register}
				errors={errors}
				errorsMessage="Tu dois renseigner ce champ"
				id="email"
			/>
            <Input
				isLoading={isLoading}
				placeholder="Mot de passe"
				type="password"
				register={register}
				errors={errors}
				errorsMessage="Tu dois renseigner ce champ"
				id="password"
			/>
            <Input
				isLoading={isLoading}
				placeholder="Comment nous as tu connu ?"
				register={register}
				errors={errors}
				errorsMessage="Tu dois renseigner ce champ"
				id="how_did_hear"
			/>
			<Button isLoading={isLoading} type="submit" fullWidth>
				S'inscrire
			</Button>
		</form>
	);
};
