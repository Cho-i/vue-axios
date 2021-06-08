import axios from "axios";

const BASE_URL = 'https://reqres.in'

export function axiosDefault() {
	axios.create({
		baseURL: BASE_URL
	})
}