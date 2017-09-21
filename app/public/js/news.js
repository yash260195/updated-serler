$(function() {
    $.getJSON('apinews', updateNews);


//To save the news entered
$('.feedback-form').submit(function(e) {
    e.preventDefault();  
      $.post('apinews', {
      title: $('#feedback-form-title').val(),
      category:$('#feedback-form-category').val(),
      message:$('#feedback-form-message').val()
    }, updateNews);
    clearArticle();
  });

  //To clear input fields
  function clearArticle()
  {
    document.querySelector('#feedback-form-title').value='';
    document.querySelector('#feedback-form-category').value='';
    document.querySelector('#feedback-form-message').value=''
  }

//To delete from news
$('.feedback-messages').on('click', function(e) {
  if(e.target.className == "feedback-delete btn btn-xs btn-danger") {
     $.ajax({
     url: 'apinews/' + e.target.id,
     type: 'DELETE',
     success: updateNews
     });
   }
 });

    function updateNews(data) {
        var output = '';
        $.each(data,function(key, item) {
          output += '     <div class="feedback-item item-list media-list">';
          output += '       <div class="feedback-item media">';
          output += ' <div class="media-left"><button id="' + key + '" class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
          output += '         <div class="feedback-info media-body">';
          output += '           <div class="feedback-head">';
          // output += '             <div class="feedback-title">' + item.title + '<small class="feedback-name label label-info"></small></div>';
          output += '<div class="feedback-title">' + item.title + '<small class="feedback-name label label-info">' + item.category + '</small></div>';
          output += '           </div>';
          output += '           <div class="feedback-message">' + item.message + '</div>';
          output += '         </div>';
          output += '       </div>';
          output += '     </div>';
        });
        $('.feedback-messages').html(output);
       }
     });