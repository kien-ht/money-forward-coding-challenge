const mockAxios: { create: () => void; get: () => void } =
  jest.genMockFromModule("axios");
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get = jest.fn(() => Promise.resolve({ data: {} }));

export default mockAxios;
