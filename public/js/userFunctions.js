
$(function() {
    $('#loadList').on('click', function() {
        $.ajax({
            type: 'GET',
            url: '/playlist',
            success: function(response) {
                console.log(`load success${response}`);
                $('#faplayer').html(response);
            }
        })
    })
})