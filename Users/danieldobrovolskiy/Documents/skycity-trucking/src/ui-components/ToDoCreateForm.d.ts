/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToDoCreateFormInputValues = {
    description?: string;
};
export declare type ToDoCreateFormValidationValues = {
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToDoCreateFormOverridesProps = {
    ToDoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToDoCreateFormProps = React.PropsWithChildren<{
    overrides?: ToDoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ToDoCreateFormInputValues) => ToDoCreateFormInputValues;
    onSuccess?: (fields: ToDoCreateFormInputValues) => void;
    onError?: (fields: ToDoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToDoCreateFormInputValues) => ToDoCreateFormInputValues;
    onValidate?: ToDoCreateFormValidationValues;
} & React.CSSProperties>;
export default function ToDoCreateForm(props: ToDoCreateFormProps): React.ReactElement;
