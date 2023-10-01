export interface Node {
  type: string;
  children?: Node[];
  [key: string]: unknown;
}
