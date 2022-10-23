import { FormEventHandler } from 'react';

export type FormProps = {
    title?: string;
    onSubmit: FormEventHandler
};
