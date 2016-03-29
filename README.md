# 한국에서 인터넷 검열을 피하는 방법

한국에서 시대를 역행하는 `warning.or.kr`을 피하는 방법과 `node.js` 기반 코드를
포함하고 있습니다.

## 우회 방법

* `Dummy Host`: 헤더의 `host` 부분을 거짓 주소나 아이피를 대신 삽입하여 필터링 하지
  못하도록 함 - `CloudFlare`와 같은 서비스를 사용하는 사이트는 불가
* `Dummy Header`: 헤더에 의미없는 공백을 삽입하여 `HTTP` 프로토콜임을 인식하지 못하게
  함 (2015/3/11 KT 패치 확인)
* `Streaming`: 순차적인 전송으로 패킷을 읽기 어렵게 함 (2015/3/20 SKT, 2015/12/1
  LGT 패치 확인)
* `VPN and SSH Proxy Tunneling`: 다들 알고있는 그것
* `Tor Proxy`: `Tor 네트워크`를 사용하여 우회
* `HTTPS`: `HTTPS`를 지원하는 사이트라면 `HTTPS`로 접속
* `SPDY`: `HTTP` 대신 `google`이 개발한 `SPDY` 프로토콜로 접속하여 우회 (서버가
  지원해야 함)

## 유용한 소프트웨어 및 참고 링크

* [Psiphon Proxy](http://psiphon3.com/)
* [Tor](https://www.torproject.org/)
* [Google mobile proxy](http://www.google.co.jp/gwt/n)
* [Google translator](https://translate.google.com/)
* [Spotflux](https://www.spotflux.com/)
* [HideMe](https://hide.me/en/proxy)
* [Webproxy](http://www.webproxy.net/)
* [Hide my ass](https://www.hidemyass.com/)
* [DodgeChrome](http://dodgechrome.blogspot.kr/)

## License

Public Domain
