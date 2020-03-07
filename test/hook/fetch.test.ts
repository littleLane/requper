import fetchMock from 'jest-fetch-mock'
import fetchHook from '../../src/hook/fetch'

describe('test for fetch hook', () => {
  let windowSpy

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'fetch')
    fetchMock.doMock()
  })

  afterEach(() => {
    windowSpy.mockRestore()
    fetchMock.resetMocks()
  })

  it('should work well', async () => {
    windowSpy.mockImplementation((input: string | Request, init?: RequestInit | undefined) => {
      if (input === '/api/user') {
        return Promise.resolve();
      }

      return fetch(input, init);
    })

    fetchHook()

    // fetchMock.mockResponseOnce(req => {

    // })

    const res = await fetch('/api/user')
    expect(res.ok).toBeTruthy()
    expect(true).toBeTruthy()
  })
})
