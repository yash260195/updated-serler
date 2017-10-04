$(function() {
    $.getJSON('apimoderator', updateArticle);
  
  //To save the article submission details
  $('.feedback-form').submit(function(e) {
    e.preventDefault();  
      $.post('apimoderator', {
      title: $('#feedback-form-title').val(),
      authors:$('#feedback-form-author').val(),
      year:$('#feedback-form-year').val(),
      month:$('#feedback-form-month').val(),
      source:$('#feedback-form-source').val(),
      doi: $('#feedback-form-doi').val(),
      number:$('#feedback-form-number').val(),
      volume:$('#feedback-form-volume').val(),
      pagenumber:$('#feedback-form-pagenumbers').val()
    }, updateArticle);    
  });
   
  //To delete from recent submission
  $('.feedback-messages').on('click', function(e) {
     if(e.target.className == "feedback-delete btn btn-xs btn-danger") {
        $.ajax({
        url: 'apimoderator/' + e.target.id,
        type: 'DELETE',
        success: updateArticle
        });
      }
    });
  
    function updateArticle(data) {
     var output = '';
     $.each(data,function(key, item) {
       output += '     <div class="feedback-item item-list media-list">';
       output += '       <div class="feedback-item media">';
       output += ' <div class="media-left"><button id="' + key + '" class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
       output += '         <div class="feedback-info media-body">';
       output += '           <div class="feedback-head">';
       output += '             <div class="feedback-title">' + item.title + '<small class="feedback-name label label-info"></small></div>';
       output += '           </div>';
       output += '           <div class="feedback-message">' + item.doi + '</div>';
       output += '         </div>';
       output += '       </div>';
       output += '     </div>';
     });
     $('.feedback-messages').html(output);
    }
  });