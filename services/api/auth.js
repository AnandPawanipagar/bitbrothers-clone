import { post } from ".";

export const signin = (data) => post(`auth/login`, data);
export const signup = (data) => post(`auth/signup`, data);
