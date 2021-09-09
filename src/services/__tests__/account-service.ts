import axios from 'axios'
import AccountService from '../account-service'
const mockAxios = axios as jest.Mocked<typeof axios>;

it("calls axios and returns account info", async () => {
    jest.clearAllMocks()
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        data: {
          "attributes": {
            "id": 1,
            "user_id": 1,
            "name": "A銀行",
            "balance": 20000
          }
        }
    }))

    const response = await AccountService.getAccountDetail("1")

    expect(response).toEqual({
      "attributes": {
        "id": 1,
        "user_id": 1,
        "name": "A銀行",
        "balance": 20000
      }
    })
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith("/accounts/1")
})
