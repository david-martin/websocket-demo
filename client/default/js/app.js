var url = ($fh.APP_MODE_RELEASE === $fh.legacy.appMode ? $fh.legacy.releaseCloudUrl : $fh.legacy.debugCloudUrl);

var socket = io.connect(url);

socket.on('registered', function (data) {
  $('#info').text(data.mesage);
  $('#send').val('Send');
});

// broadcast reception
socket.on('message', function (data) {
  $('#messages').append(data.message + '<br/>');
});

$('#send').on('click', function () {
  socket.emit('message', {
    message: $('#message').val()
  });
});