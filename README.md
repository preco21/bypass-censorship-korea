# 한국에서 인터넷 검열을 피하는 방법

> 본 문서는 국내 ISP 유해 사이트 필터링의 취약점을 간략하게 설명해놓은 문서이며, 이 문서의 내용을 악용할 시에는 법적 문제가 발생할 수 있으며, 그로 발생한 사고에 대해서 작성자는 절대 책임지지 않습니다.

한국에서 시대를 역행하는 `warning.or.kr`을 피하는 방법과 `Node.js` 기반 코드를 포함하고 있습니다.

## 우회 방법

* `Dummy Host`: 헤더의 `host` 부분을 더미 주소나 아이피를 대신 삽입하여 필터링 하지 못하도록 함. 가장 간단하지만 [`CloudFlare`](https://www.cloudflare.com/)와 같은 DNS 서비스를 사용하는 사이트는 적용 불가.
* `Dummy Header`: 헤더에 의미없는 공백을 삽입하여 `HTTP` 프로토콜임을 인식하지 못하게 함. (2015/3/11 `KT` 패치 확인)
* `Streaming`: 순차적인 패킷 전송으로 내용을 읽기 어렵게 함. (2015/3/20 `SKT`, 2015/12/1 `LGT` 패치 확인)
* `VPN and SSH Proxy Tunneling`: 패킷을 중간자 서버로 보내 처리한 후 결과를 받아 보도록 함.
* `Tor Proxy`: [`Tor Network`](https://www.torproject.org/)를 사용하여 우회.
* `HTTPS`: TLS를 통한 `HTTPS`를 지원하는 사이트라면 `HTTPS`로 접속하면 간단히 우회된다.

## 우회 서버 구축 (`HTTPS`를 통한 방법)

> 이 방법은 사용자에게 `HTTPS`로 접속하도록 미리 알려주어야 한다.

### CloudFlare

1. [`CloudFlare`](https://www.cloudflare.com/)에 가입한다.
2. 네임서버를 `CloudFlare`를 향하도록 만든다.
3. 보안 항목에서 무료 인증서를 발급받아 `HTTPS`를 활성화 한다.
4. Profit!

### Let's Encrypt

1. [이 포스트](https://blog.outsider.ne.kr/1178)를 참고하여 `HTTP` 인증서를 발급한다.
2. 웹 서버에 적용한다.
2. Profit!?

## 관련 소프트웨어 및 레퍼런스

### 프록시

* [Tor](https://www.torproject.org/)
* [Psiphon Proxy](https://psiphon3.com/ko/index.html)
* [ZenMate VPN](https://chrome.google.com/webstore/detail/zenmate-vpn-best-cyber-se/fdcgdnkidjaadafnichfpabhfomcebme)
* [Touch VPN](https://chrome.google.com/webstore/detail/free-proxy-to-unblock-any/bihmplhobchoageeokmgbdihknkjbknd)
* [Dot VPN](https://chrome.google.com/webstore/detail/dotvpn-%E2%80%94-better-than-vpn/kpiecbcckbofpmkkkdibbllpinceiihk)
* [Sitenable](https://sitenable.com/)
* [HideMe](https://hide.me/en/proxy)
* [Hide My Ass](https://www.hidemyass.com/)

### 편법

* [DodgeChrome](http://dodgechrome.blogspot.kr/)
* [Chrome Data Saver](https://chrome.google.com/webstore/detail/data-saver/pfmgfdlgomnbgkofeojodiodmgpgmkac)
* [Google Mobile Proxy](http://www.google.co.jp/gwt/n)
* [Google Translator](https://translate.google.com/)

### 레퍼런스

* [나무위키 유해사이트 항목](https://namu.wiki/w/%EC%9C%A0%ED%95%B4%EC%82%AC%EC%9D%B4%ED%8A%B8)
* [사이트 차단 및 우회 기법 분석](http://baator9.tistory.com/9)
* [warning.or.kr 의 작동 원리를 알아봅시다](http://blog.rainygirl.com/?p=2521)

## 기여하기

> 판사님 읍읍..

잘못된 정보 수정, 추가적인 정보를 수정하려면 `PR`을 넣어주세요!

## License

[Public Domain](http://unlicense.org/)
