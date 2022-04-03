export interface IAPIResponse {
  text: string
  index: number
  logprobs: any
  finish_reason: string
}

export interface ITone {
  id: number;
  text: string;
}
