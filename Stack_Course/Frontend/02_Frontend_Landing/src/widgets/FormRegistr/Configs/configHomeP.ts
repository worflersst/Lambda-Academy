import { InputTupe } from '@/shared/ui/Input/ui';

type Config = (InputTupe & {
	validate?: (state: FormDataI) => boolean;
	name: keyof FormDataI;
})[];

export const configHomeP: Config = [
	{
		name: 'name',
		labelText: 'Name',
		placeholder: 'John Appleseed',
		required: true,
		type: 'text',
		minLength: 1,
		pattern: '^[A-Za-z]+(?: [A-Za-z]+)+$',
		errorMessage: 'Requierd field',
	},
	{
		name: 'businesName',
		labelText: 'Business Name',
		placeholder: 'Burgers &Boba (Singapore)',
		required: true,
		type: 'text',
		minLength: 1,
		errorMessage: 'Requierd field',
	},
	{
		name: 'phone',
		labelText: 'Phone Number',
		placeholder: '65 9123 4567',
		required: true,
		type: 'tel',
		pattern: '^65 ?\\d{4} ?\\d{4}$',
		errorMessage: 'Requierd field',
	},
];

export const configHomePState: FormDataI = {
	name: '',
	businesName: '',
	phone: '',
};

export type FormDataI = {
	name: string;
	businesName: string;
	phone: string;
};
