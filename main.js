let a = MaxQstns - (Qnum - 1);
    if (document.URL.startsWith("https://lizardpoint.com/people") || document.URL.startsWith("http://lizardpoint.com/people")) {
        for (let i = 0; i < a; i++) {
            filter2(Guess[Qnum]);
        }
    } else if (document.URL.startsWith("https://lizardpoint.com/geography") || document.URL.startsWith("http://lizardpoint.com/geography")) {
        if (airportQuiz) {
            for (let i = 0; i < a; i++) {
                filter2(Qstn[Guess[Qnum]].code);
            }
        } else if (textInput) {
            for (let i = 0; i < a; i++) {
                filter2(Qstn[Guess[Qnum]].name);
            }
        } else {
            for (let i = 0; i < a; i++) {
                filter2(Guess[Qnum]);
            }
        }
    } else if (document.URL.startsWith("https://lizardpoint.com/flags") || document.URL.startsWith("http://lizardpoint.com/flags")) {
        for (let i = 0; i < a; i++) {
            chkQstn(Qstn[Qnum].name);
        }
    }
