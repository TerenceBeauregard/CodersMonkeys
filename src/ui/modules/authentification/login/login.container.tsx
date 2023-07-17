import { useEffect } from "react";
import { LoginView } from "./login.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFilstype } from "@/types/forms";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase-config";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSingInUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const LoginContainer = () => {
	const router = useRouter();
	const { value: isLoading, setValue: setIsLoading } = useToggle();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user.uid;
				console.log("user", user);
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	}, []);

	const {
		handleSubmit,
		formState: { errors },
		register,
		setError,
		reset,
	} = useForm<LoginFormFilstype>();

	const handleSignInUser = async ({ email, password }: LoginFormFilstype) => {
		const { error } = await firebaseSingInUser(email, password);
		if (error) {
			setIsLoading(false);
			toast.error(error.message);
			return;
		}
		toast.success("Bienvenu sur Coders Monkeys");
		setIsLoading(false);
		reset();
		router.push("/mon-espace");
	};

	const onSubmit: SubmitHandler<LoginFormFilstype> = async (formData) => {
		setIsLoading(true);
		const { password } = formData;
		if (password.length < 6) {
			setError("password", {
				type: "manuel",
				message: "ton mot de passe doit contenir 6 caractere",
			});
			setIsLoading(false);
			return;
		}
		handleSignInUser(formData);
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
