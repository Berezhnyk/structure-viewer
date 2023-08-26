import { makeSureItIsJson, formatJSON } from './utils';

describe('JSON Formatter', () => {
  let originalConsoleError;

  beforeAll(() => {
      originalConsoleError = console.error;
      console.error = jest.fn();
  });

  afterAll(() => {
      console.error = originalConsoleError;
  });

  describe('makeSureItIsJson', () => {
      it('should add a closing bracket for JSON objects', () => {
          const input = '{ "key": "value"';
          const output = makeSureItIsJson(input);
          expect(output).toBe('{ "key": "value"}');
      });

      it('should add a closing square bracket for JSON arrays', () => {
          const input = '[{"key": "value"}';
          const output = makeSureItIsJson(input);
          expect(output).toBe('[{"key": "value"}]');
      });

      it('should return the original data if it does not start with { or [', () => {
          const input = '"value"';
          const output = makeSureItIsJson(input);
          expect(output).toBe(input);
      });
  });

  describe('formatJSON', () => {
      it('should format the JSON data', () => {
          const input = { key: "value" };
          const output = formatJSON(input);
          expect(output).toBe('{\n  "key": "value"\n}');
      });
  });
});
