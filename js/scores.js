"use strict";
if (typeof (Storage)!=='undefined') {
    if (localStorage['scores']) {
        let scores = JSON.parse(localStorage['scores']);
        console.log(scores);
        document.write('<div align="center"><table border="1">');

        for (let i=0; i<10;i++){
            document.write('<tr><td>'+(i+1)+'</td>');
            document.write('<td>'+scores[i]+'</td></tr>');

        }

        document.write('</table></div>');
    } else {
        document.write('<div align="center">Noch keine Scores gespeichert</div>');
    }
}