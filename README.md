# bypass-internet-censorship
한국에서 인터넷 검열을 피하는 몇가지 방법과 node.js 기반 엔진 코드를 포함하고 있습니다

## Bypass method
```
| Dummy host: 헤더의 Host부분을 이상한 주소나 아이피를 대신 삽입하여 필터링 하지 못하도록 함
| Dummy header: 헤더에 의미없는 공백을 삽입하여 HTTP프로토콜임을 인식하지 못하게 함 (2015/3/11 KT 패치 확인)
| Sequential-transmission: 순차적인 전송으로 패킷을 읽기 어렵게 함 (2015/3/20 SKT 패치 확인)
| Socks5 Proxy: socks5 proto를 사용하여 proxy 우회
| VPN and SSH Proxy Tunneling(Web proxy): 다들 알고있는 그것
| Tor Proxy: Tor 네트워크를 사용하여 우회
| SPDY Proxy: HTTP대신 google이 개발한 SPDY프로토콜로 접속하여 우회 (서버가 지원해야함)
| HTTPS: HTTPS를 지원하는 사이트라면 HTTPS로 접속
```

##유용한 소프트웨어 및 참고 링크
```
Psiphon Proxy: [http://psiphon3.com/]
Tor: [https://www.torproject.org/]
Google mobile proxy: [http://www.google.co.jp/gwt/n]
Google translator: [https://translate.google.com/]
Spotflux: [https://www.spotflux.com/]
HideMe: [https://hide.me/en/proxy]
Webproxy: [http://www.webproxy.net/]
Hide my ass: [https://www.hidemyass.com/]
```
