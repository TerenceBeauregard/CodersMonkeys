import { useState } from "react";
import { LoginView } from "./login.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFilstype } from "@/types/forms";

export const LoginContainer = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		handleSubmit,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<LoginFormFilstype>();

	const onSubmit: SubmitHandler<LoginFormFilstype> = async (formData) => {
		setIsLoading(true);
		console.log("formData", formData);
	};
	return (
		<>
			<LoginView
				form={{
					errors,
					register,
					handleSubmit,
					onSubmit,
					isLoading,
				}}
			/>
		</>
	);
};
