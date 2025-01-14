export interface Account {
  id: string;
  name: string;
  type: "bank" | "cash" | "mobile_money";
  balance: number;
}
