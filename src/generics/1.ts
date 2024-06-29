import axios, { AxiosResponse } from "axios";

async function fetchData<T>(url: string): Promise<AxiosResponse<T>> {
  try {
    const response = await axios.get<AxiosResponse>(url);

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
