// [Q+] アンケート結果をメールで送信する以外の方法として、どのようなものがあるか調べてみよう
let email_address = '(ここに自分のメールアドレスを記入)';
let subject = 'アンケート結果';

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function() {
        let nickname = document.getElementById('nickname');

        // アンケート結果を収集し、改行コードで連結する
        let results = collectSurveyResults();
        // let body = results.join('%0D%0A');
        let body = results.join('\n');

        // メーラーを起動し、アンケート結果を送信
        // location.href = [
        //     'mailto:', email_address,
        //     '?subject=', subject,
        //     '&body=', body
        // ].join("");
        window.alert(body);
    });
});

// 入力されたアンケート結果を収集する
function collectSurveyResults() {
    // 各アンケート結果を格納する配列
    let surveys = [];

    // ニックネーム
    let nickname = document.getElementById('nickname');
    surveys.push('ニックネーム: ' + nickname.value);

    // スマホ
    let smartphone = document.getElementById('smartphone');
    surveys.push('スマホ: ' + smartphone.value);

    // きのこたけのこ
    let kinotakes = document.getElementsByName('kinotake');
    for (let i = 0; i < kinotakes.length; i++) {
        let kinotake = kinotakes.item(i);
        if (kinotake.checked) {
            surveys.push('派閥: ' + kinotake.value);
        }
    }

    // [Q2] Q1.で追加したアンケートの回答が送信されるよう、JavaScriptプログラムを追加しよう

    return surveys;
}
