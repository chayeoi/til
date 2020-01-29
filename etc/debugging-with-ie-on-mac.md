# Mac OS 환경에서 IE 디버깅하기

VirtualBox를 이용하여 Mac OS 환경에서도 IE를 디버깅할 수 있다.

## 1단계: VirtualBox 설치

[VirtualBox](https://www.virtualbox.org/wiki/Downloads)에서 OS에 맞는 패키지 설치 파일을 다운로드한다. Mac OS에서 사용할 것이므로 *OS X hosts*를 선택한다. 다운로드가 완료되면 파일을 실행하여 설치를 완료한다.

## 2단계: Virtual Machine 설치

[Virtual Machines](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)을 다운로드한다. VirtualBox를 사용할 것이므로 VM 플랫폼은 VirtualBox를 선택한다. 다운로드가 완료되면 압축을 풀고 *`*MSEdge - Win10.ovf*`* 파일을 실행한다.(압축을 풀면 *`*MSEdge - Win10-disk001.vmdk*`* 파일도 있던데 이건 실행해보지 않아서 모르겠다.)

## 3단계: Virtual Machine 실행

VirtualBox를 켠 다음 방금 설치한 VM 인스턴스를 시작한다. (비밀번호: MSEdge - Passw0rd!, VM 다운로드했던 곳에 적혀있다.)

## 4단계: IP 주소 확인

로컬 환경을 VM에서 테스트하기 위해선 localhost에 접속할 수 있어야 한다. VM을 실행하여 *Command Prompt*를 실행하고 명령줄에 `ipconfig`를 입력하여 Default Gateway를 확인한다. 이 주소를 localhost처럼 사용하면 된다.

## 참고

* [Accessing localhost on Mac from Windows VM Virtualbox | Guilherme Sa](https://medium.com/@urubuz/accessing-localhost-in-mac-from-windows-vm-in-virtualbox-312a3de6fedb)
* [Mac 환경에서 IE디버깅하기. (virtualBox 사용) | 필오의 개발 docs](https://feel5ny.github.io/2019/03/10/debug_01/)
* [Running IE 11 or Edge in VirtualBox | ca-cwds/intake](https://github.com/ca-cwds/intake/wiki/Running-IE-11-or-Edge-in-VirtualBox)
