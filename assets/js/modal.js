// find the modal & close button
var modal = document.getElementById('RFImodal'),
    close = modal.querySelectorAll('article button')[0],
    modalStatus = false;
// how to add the modal to the page
function spawnModal(e){
  var wistiaEmbed = document.querySelectorAll('.wistia_embed')[0];
  modalStatus = true;
  modal.style.pointerEvents = 'auto';
  wistiaEmbed.style.display = 'block';
  modal.style.opacity = '1';
  wistiaEmbed.wistiaApi.play();
}
// teach the modal backdrop and close button to close the modal
modal.addEventListener('click',clickClose);
close.addEventListener('click',clickClose);
function clickClose(e){
  if (e.target == modal || e.target == close){
    killModal()
  }
}
// teach the 'escape' key to close the modal
document.onkeyup = function(e) {
  e = e || window.event;
  var charCode = (typeof e.which == "number")?e.which:e.keyCode;
  if (charCode == 27 && modalStatus == true) { killModal() }
}
// how to close the modal
function killModal(){
  var wistiaEmbed = document.querySelectorAll('.wistia_embed')[0];
  wistiaEmbed.wistiaApi.pause();
  modalStatus = false;
  modal.style.pointerEvents = 'none';
  modal.style.opacity = '0';
  wistiaEmbed.style.display = 'none';