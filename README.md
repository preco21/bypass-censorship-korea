# 한국에서 인터넷 검열을 피하는 방법

> 본 문서는 국내 ISP 유해 사이트 필터링의 취약점을 간략하게 설명해놓은 문서이며, 이 문서의 내용을 악용할 시에는 법적 문제가 발생할 수 있으며, 그로 발생한 사고에 대해서 작성자는 절대 책임지지 않습니다.

한국에서 시대를 역행하는 `warning.or.kr`을 피하는 방법과 `Node.js` 기반 코드를
포함하고 있습니다.

## 우회 방법

* `Dummy Host`: 헤더의 `host` 부분을 더미 주소나 아이피를 대신 삽입하여 필터링 하지
  못하도록 함. 가장 간단하지만 `CloudFlare`와 같은 서비스를 사용하는 사이트는 불가.
* `Dummy Header`: 헤더에 의미없는 공백을 삽입하여 `HTTP` 프로토콜임을 인식하지 못하게
  함. (2015/3/11 KT 패치 확인)
* `Streaming`: 순차적인 전송으로 패킷을 읽기 어렵게 함. (2015/3/20 SKT, 2015/12/1
  LGT 패치 확인)
* `VPN and SSH Proxy Tunneling`: 패킷을 중간 서버 (보통 해외)로 보내 처리한 후 결과를
  받도록 함.
* `Tor Proxy`: `Tor 네트워크`를 사용하여 우회.
* `HTTPS`: `HTTPS`를 지원하는 사이트라면 `HTTPS`로 접속.

## 관련 소프트웨어 및 레퍼런스

### 프록시

* [Psiphon Proxy](https://psiphon3.com/ko/index.html)
* [Tor](https://www.torproject.org/)
* [ZenMate VPN](https://chrome.google.com/webstore/detail/zenmate-vpn-best-cyber-se/fdcgdnkidjaadafnichfpabhfomcebme)
* [Touch VPN](https://chrome.google.com/webstore/detail/free-proxy-to-unblock-any/bihmplhobchoageeokmgbdihknkjbknd)
* [Dot VPN](https://chrome.google.com/webstore/detail/dotvpn-%E2%80%94-better-than-vpn/kpiecbcckbofpmkkkdibbllpinceiihk)
* [Sitenable](https://sitenable.com/)
* [HideMe](https://hide.me/en/proxy)
* [Hide my ass](https://www.hidemyass.com/)

### 편법

* [Chrome Data Saver](https://chrome.google.com/webstore/detail/data-saver/pfmgfdlgomnbgkofeojodiodmgpgmkac)
* [DodgeChrome](http://dodgechrome.blogspot.kr/)
* [Google mobile proxy](http://www.google.co.jp/gwt/n)
* [Google translator](https://translate.google.com/)

### 레퍼런스

* [유해사이트 나무위키](https://namu.wiki/w/%EC%9C%A0%ED%95%B4%EC%82%AC%EC%9D%B4%ED%8A%B8)
* [사이트 차단 및 우회 기법 분석](http://baator9.tistory.com/9)
* [warning.or.kr 의 작동 원리를 알아봅시다](http://blog.rainygirl.com/?p=2521)

## 기여하기

> 판사님 읍읍..

잘못된 정보 수정, 추가적인 정보를 제공하길 원한다면 `PR`을 넣어주세요!

## License

Unlicense
