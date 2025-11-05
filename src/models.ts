import { Table, Bool, Timestamptz, Int4, Text } from "typegres";

export const Todos = Table("todos", {
  completed: { type: Bool<1>, required: false },
  created_at: { type: Timestamptz<1>, required: false },
  id: { type: Int4<1>, required: false },
  title: { type: Text<1>, required: true },
  user_id: { type: Int4<1>, required: true },
});

export const User = Table("user", {
  created_at: { type: Timestamptz<1>, required: false },
  id: { type: Int4<1>, required: false },
  username: { type: Text<1>, required: true },
});
