import { TUser } from "../types/TUser";

export const getUsers = async (): Promise<TUser[]> => {
  return await new Promise((res) =>
    res([
      {
        firstname: "Nick",
        lastname: "Dev routine",
      },
      {
        firstname: "Hello",
        lastname: "World",
      },
    ])
  );
};
