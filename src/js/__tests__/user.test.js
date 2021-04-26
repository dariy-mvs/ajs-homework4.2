import { loadUser } from '../user';
import { httpGet } from '../http';
import getStringHealth from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});

test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 90 });
  expect(result).toBe('healthy');
});
test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 98 });
  expect(result).toBe('healthy');
});
test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 50 });
  expect(result).toBe('healthy');
});
test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 55 });
  expect(result).toBe('healthy');
});
test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 15 });
  expect(result).toBe('wounded');
});
test('getStringHealth', () => {
  const result = getStringHealth({ name: 'mag', health: 5 });
  expect(result).toBe('critical');
});
