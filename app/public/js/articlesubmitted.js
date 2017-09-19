$(function() {
  $.getJSON('api', updateArticle);

//To save the article submission details
$('.feedback-form').submit(function(e) {
	e.preventDefault();
	$.post('api', {
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

  function updateArticle(data) {
   var output = '';
   $.each(data,function(key, item) {
     output += '     <div class="feedback-item item-list media-list">';
     output += '       <div class="feedback-item media">';
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