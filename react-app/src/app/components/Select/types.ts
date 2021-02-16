export interface Option {
  name: string;
  value: string;
}

export default interface ISelect {
  options: Option[];
  handleChange: (option: Option | null) => void;
  value: string;
}
