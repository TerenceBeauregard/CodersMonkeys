import { useState } from "react";
import { ForgetPasswordView } from "./forget-password.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFilstype } from "@/types/forms";

export const ForgetPasswordContainer = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const {
		handleSubmit,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<ForgetPasswordFormFilstype>();

	const onSubmit: SubmitHandler<ForgetPasswordFormFilstype> = async (
		formData
	) => {
		setIsLoading(true);
		console.log("formData", formData);
	};
	return (
		<ForgetPasswordView
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
