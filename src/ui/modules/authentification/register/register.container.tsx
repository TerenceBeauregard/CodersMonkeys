import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFielsType } from "@/types/forms";
import { firebaseCreateUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";

export const RegisterContainer = () => {
	const { value: isLoading, setValue: setIsLoading } = useToggle();

	const {
		handleSubmit,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<RegisterFormFielsType>();

	const handleCreateUserAuthentication = async ({
		email,
		password,
		how_did_hear,
	}: RegisterFormFielsType) => {
		const { error, data } = await firebaseCreateUser(email, password);
		if (error) {
			setIsLoading(false);
			console.log(error);
			toast.error(error.message);
			return;
		}
		toast.success("Bienvenue");
		setIsLoading(false);
		reset();
	};

	const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData) => {
		setIsLoading(true);

		const { password } = formData;

		if (password.length <= 5) {
			setError("password", {
				type: "manual",
				message: "mot de passe trop court",
			});
			return;
		}
		handleCreateUserAuthentication(formData);
	};

	return (
		<RegisterView
			form={{
				errors,
				register,
				handleSubmit,
				onSubmit,
				isLoading,
			}}
		/>
	);
};
