$(function() {
    $.getJSON('apievidence', updateEvidence);
  
  //To save the article submission details
  $('.feedback-form').submit(function(e) {
    e.preventDefault();  
      $.post('apievidence', {
        ID: $('#feedback-form-id').val(),
        Title:$('#feedback-form-rtitle').val(),
        RQuestion:$('#feedback-form-rquestion').val(),
        RMethod:$('#feedback-form-rmethod').val(),
        RMetrics:$('#feedback-form-rmetric').val(),
        Rparticipants:$('#feedback-form-rparticipants').val(),
        SEMethod:$('#feedback-form-semethod').val(),
        SEMethodology:$('#feedback-form-semethodology').val(),
        EBenefit: $('#feedback-form-ebenefit').val(),
        EContext:$('#feedback-form-econtext').val(),
        EResult:$('#feedback-form-eresult').val(),
        currentdate: $('#feedback-form-currentdate').val()      
    }, updateEvidence);
    clearArticle();
  });
  function clearArticle()
  {
    document.querySelector('#feedback-form-id').value='';
    document.querySelector('#feedback-form-rtitle').value='';
    document.querySelector('#feedback-form-rquestion').value='';
    document.querySelector('#feedback-form-rmethod').value='';
    document.querySelector('#feedback-form-rmetric').value='';
    document.querySelector('#feedback-form-rparticipants').value='';
    document.querySelector('#feedback-form-semethod').value='';
    document.querySelector('#feedback-form-semethodology').value='';
    document.querySelector('#feedback-form-ebenefit').value='';
    document.querySelector('#feedback-form-econtext').value='';
    document.querySelector('#feedback-form-eresult').value='';
  }
  
  //To delete from recent submission
  $('.feedback-messages').on('click', function(e) {
     if(e.target.className == "glyphicon glyphicon-remove") {
        $.ajax({
        url: 'apievidence/' + e.target.id,
        type: 'DELETE',
        success: updateEvidence
        });
      }
    });
  
    function updateEvidence(data) {
     var output = '';
     $.each(data,function(key, item) {
       output += '     <div class="feedback-item item-list media-list">';
       output += '       <div class="feedback-item media">';
       output += ' <div class="media-left"><button id="' + key + '" class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
       output += '         <div class="feedback-info media-body">';
       output += '           <div class="feedback-head">';
      //  output += '             <div class="feedback-title">' + item.title + '<small class="feedback-name label label-info"></small></div>';
       output += '<div class="feedback-title" >' + item.ID + '  ' +  item.Title +'  '+ '  <small class="feedback-name label label-info" style="display:none;"> ' + '<a href="'+ key + '" class="label label-info">Edit</a>' + '</small></div>';
       output += '           </div>';
       output += '           <div class="feedback-message" style="color:#01AAA3;"> Date Submitted: ' + item.currentdate + '</div>';
       output += '           <div class="feedback-message">' + item.RQuestion + '</div>';
       output += '         </div>';
       output += '       </div>';
       output += '     </div>';
     });
     $('.feedback-messages').html(output);
    }
  });