import axios from "axios";
import UserService from "../user-service";
const mockAxios = axios as jest.Mocked<typeof axios>;

it("calls axios and returns user info", async () => {
  jest.clearAllMocks();
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        attributes: {
          id: 1,
          name: "Alice",
          account_ids: [1, 3, 5],
        },
      },
    })
  );

  const response = await UserService.getUser("1");

  expect(response).toEqual({
    attributes: {
      id: 1,
      name: "Alice",
      account_ids: [1, 3, 5],
    },
  });
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith("/users/1");
});

it("calls axios and returns user account list", async () => {
  jest.clearAllMocks();
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        attributes: {
          id: 6,
          user_id: 3,
          name: "Fカード",
          balance: 22000,
        },
      },
    })
  );

  const response = await UserService.getUserAccountList("3");

  expect(response).toEqual({
    attributes: {
      id: 6,
      user_id: 3,
      name: "Fカード",
      balance: 22000,
    },
  });
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith("/users/3/accounts");
});
