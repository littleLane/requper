export default function() {
  const defaultXHROpen = 'XMLHttpRequest' in window ? XMLHttpRequest.prototype.open : undefined
  const defaultXHRSend = 'XMLHttpRequest' in window ? XMLHttpRequest.prototype.send : undefined
  ;(window as any).XMLHttpRequest.prototype.open = function(
    method: string,
    url: string,
    async: boolean,
    username?: string | null,
    password?: string | null
  ) {
    this.addEventListener(
      'readystatechange',
      () => {
        if (this.readyState === 1) {
        }
      },
      false
    )

    // @ts-ignore
    defaultXHROpen!.apply(this, arguments)
  }
  ;(window as any).XMLHttpRequest.prototype.send = function(data: any) {
    this.addEventListener('readystatechange', () => {})

    defaultXHRSend!.call(this, data)
  }
}
