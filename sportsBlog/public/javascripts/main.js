$(document).ready(function(){
  $('.category-delete').click(function(event){
    $target= $(event.target);
    $.ajax({
      type: 'DELETE',
      url: '/categories/delete/' + $target.attr('data-category-id'),
      data:{
        _csrf: $target.attr('data-csrf')
      },
      success: function(response){
        $target.parent().parent().remove();
        alert('Category Removed');
        window.location.href = '/manage/categories';
      },
      error:function(error){
        alert(error);
        console.log(error);
      }
    });
  });
});
