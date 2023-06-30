export interface FormType {
	control?: any;
	onSubmit: any;
	errors: any;
	isLoading: boolean;
	register: any;
	handleSubmit: any;
}

export interface RegisterFormFielsType {
	email: string;
	password: string;
	how_did_hear: string;
}

export interface LoginFormFilstype {
	email: string;
	password: string;
}

export interface ForgetPasswordFormFilstype {
	email: string;
}
