import xhrMock from 'xhr-mock';
import axios from 'axios'
import xhrHook from '../../src/hook/xhr'

describe('test for xhr hook', () => {
  beforeEach(() => {
    xhrMock.setup()
  })

  afterEach(() => {
    xhrMock.teardown()
  })

  xhrHook()

  it('should work well', async () => {
    xhrMock.post('/api/user', (req, res) => {
      expect(req.header('Content-Type')).toContain('application/json')
      expect(req.body()).toEqual('{"data":{"name":"John"}}')
      return res.status(201).body('{"data":{"id":"abc-123"}}')
    })

    const res = await axios.post('/api/user', {data: {name: 'John'}})
    expect(res.status).toEqual(201)
    expect(res.data).toMatchObject({data: {id: 'abc-123'}})
  })
})
