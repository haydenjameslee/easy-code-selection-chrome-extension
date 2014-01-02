/**
 * Creates the range of text to select and selects it
 */
function selectText(element) {
    var range, selection;

    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

//On load event handlers
jQuery(document).ready(function(){
    var flag;
    jQuery('code').on('mousedown', function() {
        flag = 0;
    });

    jQuery('code').on('mousemove', function(){
        flag = 1;
    });

    jQuery('code').on('mouseup', function(){
        if(flag === 0){
            selectText(jQuery(this)[0]);
        }
    });
});

