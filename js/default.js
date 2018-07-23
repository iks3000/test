$(document).ready(function(){

    $.getJSON('https://fazarosta.com/front/?type=json', function (data) {
        var sumArray = data.reduce(function(acc, val) { return acc + val; }, 0);
        $('.sum').val(sumArray);
    });

    var rv_name = /^[a-zа-яё\s\\-]{3,30}$/iu;
    var rv_email = /^([a-z0-9_.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/;

    $('#name').on('keyup blur', function() {
        if ( $(this).val().match(rv_name) ) {
            $(this).removeClass('is-invalid').addClass('is-valid');
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
        }
    });

    $('#email').on('keyup blur', function() {
        if($(this).val().match(rv_email) ){
            $(this).removeClass('is-invalid').addClass('is-valid');
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
        }
    });

    function inputArr() {
        var formData = {};
        $('input[type=text]').each(function(){
            formData[this.getAttribute('name')] = this.value;
        });
        return formData;
    }

    $('#submit').on('click', function(e){
        if($('#name').val() == '') {
            $('#name').removeClass('is-valid').addClass('is-invalid');
        }
        if($('#email').val() == '') {
            $('#email').removeClass('is-valid').addClass('is-invalid');
        }

        e.preventDefault();
        var formData = inputArr();
        var input = $(this);
        var val = input.val();

        if (!rv_email.test(val) && !rv_name.test(val)) {
            input.removeClass('is-valid').addClass('is-invalid');
        } else {
            input.removeClass('is-invalid').addClass('is-valid');
        }

        // ------ AJAX -----
        if (!$('.form-control').hasClass('is-invalid')) {
            $.ajax({
                type: 'POST',
                url: 'https://webhook.site/096ec6dd-ad58-4f29-a5d3-9f8778287172',
                data: JSON.stringify(formData),
                success: function (data) {
                    console.log(data);
                }
            });
        }
    });
});
