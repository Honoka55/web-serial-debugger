const i18n = {
    data: {
        'zh-hans': {
            'title': 'Web串口调试工具',
            'baud-rate': '波特率：',
            'data-bits': '数据位：',
            'stop-bits': '停止位：',
            'parity-select': '奇偶校验：',
            'parity-select-option-none': '无',
            'parity-select-option-odd': '奇校验',
            'parity-select-option-even': '偶校验',
            'connect-button': '连接串口',
            'close-button': '关闭串口',
            'save-button': '保存',
            'clear-button': '清除',
            'send-button': '发送',
            'input-placeholder-text': '请输入文本',
            'input-placeholder-hex': '请输入十六进制',
            'encoding-select': '编码方式：',
            'format-select': '显示格式：',
            'format-select-option-hex': '十六进制',
            'format-select-option-text': '文本',
            'newline-select': '换行符：',
            'newline-select-option-crlf': '回车换行CRLF',
            'newline-select-option-lf': '换行LF',
            'timestamp-checkbox': '打印时间戳（以指定换行符断帧）',
            'language-select': '语言：'
        },
        'zh-hant': {
            'title': 'Web序列埠除錯工具',
            'baud-rate': '鮑率：',
            'data-bits': '資料位元：',
            'stop-bits': '停止位元：',
            'parity-select': '奇偶同位：',
            'parity-select-option-none': '無',
            'parity-select-option-odd': '奇同位',
            'parity-select-option-even': '偶同位',
            'connect-button': '連線到序列埠',
            'close-button': '關閉序列埠',
            'save-button': '保存',
            'clear-button': '清除',
            'send-button': '傳送',
            'input-placeholder-text': '請輸入文字',
            'input-placeholder-hex': '請輸入十六進位',
            'encoding-select': '編碼方式：',
            'format-select': '顯示格式：',
            'format-select-option-hex': '十六進位',
            'format-select-option-text': '文字',
            'newline-select': '換行符：',
            'newline-select-option-crlf': '回車換行CRLF',
            'newline-select-option-lf': '換行LF',
            'timestamp-checkbox': '列印時間戳（以指定換行符分割訊框）',
            'language-select': '語言：'
        },
        'ja': {
            'title': 'Webシリアルデバッグツール',
            'baud-rate': 'ボーレート：',
            'data-bits': 'データビット：',
            'stop-bits': 'ストップビット：',
            'parity-select': 'パリティ：',
            'parity-select-option-none': 'なし',
            'parity-select-option-odd': '奇数',
            'parity-select-option-even': '偶数',
            'connect-button': 'シリアルポートに接続',
            'close-button': 'シリアルポートを閉じる',
            'save-button': '保存',
            'clear-button': 'クリア',
            'send-button': '送信',
            'input-placeholder-text': 'テキストを入力してください',
            'input-placeholder-hex': '16進数を入力してください',
            'encoding-select': 'エンコーディング：',
            'format-select': '表示形式：',
            'format-select-option-hex': '16進数',
            'format-select-option-text': 'テキスト',
            'newline-select': '改行コード：',
            'newline-select-option-crlf': 'CRLF',
            'newline-select-option-lf': 'LF',
            'timestamp-checkbox': 'タイムスタンプ出力（指定された改行コードで区切る）',
            'language-select': '言語：'
        },
        'ko': {
            'title': 'Web 직렬 디버거',
            'baud-rate': '보오율: ',
            'data-bits': '데이터 비트: ',
            'stop-bits': '정지 비트: ',
            'parity-select': '패리티: ',
            'parity-select-option-none': '없음',
            'parity-select-option-odd': '홀수',
            'parity-select-option-even': '짝수',
            'connect-button': '직렬 포트 연결',
            'close-button': '직렬 포트 닫기',
            'save-button': '저장',
            'clear-button': '지우기',
            'send-button': '전송',
            'input-placeholder-text': '텍스트을 입력하세요',
            'input-placeholder-hex': '십육진수를 입력하세요',
            'encoding-select': '인코딩 방식: ',
            'format-select': '표시 형식: ',
            'format-select-option-hex': '십육진법',
            'format-select-option-text': '텍스트',
            'newline-select': '개행 문자: ',
            'newline-select-option-crlf': 'CRLF',
            'newline-select-option-lf': 'LF',
            'timestamp-checkbox': '타임스탬프 출력 (지정된 개행 코드로 구분)',
            'language-select': '언어: '
        },
        'en': {
            'title': 'Web Serial Debugger',
            'baud-rate': 'Baud rate: ',
            'data-bits': 'Data bit: ',
            'stop-bits': 'Stop bit: ',
            'parity-select': 'Parity: ',
            'parity-select-option-none': 'None',
            'parity-select-option-odd': 'Odd',
            'parity-select-option-even': 'Even',
            'connect-button': 'Connect serial port',
            'close-button': 'Close serial port',
            'save-button': 'Save',
            'clear-button': 'Clear',
            'send-button': 'Send',
            'input-placeholder-text': 'Enter text',
            'input-placeholder-hex': 'Enter hexadecimal',
            'encoding-select': 'Encoding: ',
            'format-select': 'Display format: ',
            'format-select-option-hex': 'Hexadecimal',
            'format-select-option-text': 'Text',
            'newline-select': 'Newline: ',
            'newline-select-option-crlf': 'CRLF',
            'newline-select-option-lf': 'LF',
            'timestamp-checkbox': 'Print timestamp (frame break with specified newline)',
            'language-select': 'Language: '
        }
    },
    currentLanguage: '',
    setLanguage(language) {
        document.querySelector('html').setAttribute('lang', language);
        this.currentLanguage = language;
        let elements = document.querySelectorAll('[data-i18n]');
        elements.forEach((element) => {
            let key = element.getAttribute('data-i18n');
            element.innerHTML = this.getText(key);
        });
        const selectedFormat = document.getElementById('format').value;
        if (selectedFormat === 'hex') {
            input.setAttribute('placeholder', i18n.getText('input-placeholder-hex'));
        } else {
            input.setAttribute('placeholder', i18n.getText('input-placeholder-text'));
        }
    },
    getText(key) {
        return this.data[this.currentLanguage][key];
    },
    detectLanguage() {
        let language = navigator.language;
        if (!this.data[language]) {
            language = 'zh-hans';
        }
        document.getElementById('language').value = language;
        this.setLanguage(language);
    }
};

i18n.detectLanguage();
