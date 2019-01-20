"use strict";

if (typeof (Storage) !== 'undefined') {
    if (localStorage['scores']) {
        let scores = JSON.parse(localStorage['scores']);
        console.log(scores);
        document.write('<div align="center"><table border="1" width="200px">');

        for (let i = 0; i < 10; i++) {
            document.write('<tr><td width="20%">' + (i + 1) + '.</td>');
            document.write('<td width="80%" align="right">' + scores[i] + '</td></tr>');

        }

        document.write('</table></div>');
    } else {
        document.write('<div align="center">Noch keine Scores gespeichert</div>');
    }
}