$(document).ready( () => { 
    $('input[name="skills"]').click( () => {
        getSelCheckBox('skills');
    });

    $('input[name="cities"]').click( () => {
        getSelCheckBox('cities');
    });

    getSelCheckBox = (groupName) => {
        var result = $('input[name="'+ groupName +'"]:checked');
        // console.log(result);
        if(result.length > 0) {
            var resultString = result.length + " checkboxe(s) checked <br/>";
            console.log(resultString);
            result.each(function () {
                resultString += $(this).val() + "<br/>";
            });
            $('#div' + groupName).html(resultString);
        } 
        else {
            $('#div' + groupName).html('no checkbox checked');
        }
    };
});