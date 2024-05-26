type ApiRequest<Data, Method = "GET"> = {
  data: Data;
  method: Method;
};

type TSConfig<T = { strict: true }> = {
  [K in keyof T]: T[K];
};
