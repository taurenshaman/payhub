export interface HttpResponse<T> extends Response {
  parsedBody?: T;
}

// export interface IBank{
//   transfer(targetAddress: string, unit: string, amount: number, feeRate?: number, memo?: string): Promise<string>
// }