import { post } from ".";

export const submitForm = (data) => post(`form-entries/`, data);
