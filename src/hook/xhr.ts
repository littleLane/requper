import { IXHROpen } from '../types'

const fetchHook = (): void => {
  const defaultXHROpen = 'XMLHttpRequest' in window ? XMLHttpRequest.prototype.open : undefined
  const defaultXHRSend = 'XMLHttpRequest' in window ? XMLHttpRequest.prototype.send : undefined

  ;(window as any).XMLHttpRequest.prototype.open = function(...args: IXHROpen): void {
    defaultXHROpen!.apply(this, args)
  }

  ;(window as any).XMLHttpRequest.prototype.send = function(data: any): void {
    defaultXHRSend!.call(this, data)
  }
}

export default fetchHook
