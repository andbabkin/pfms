/** Response from the backend with any data structure */
export interface BaseResponse {
  data: any;
  error: string;
  status: number;
}
