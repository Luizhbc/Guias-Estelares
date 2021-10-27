const buttonOpenMo = document.getElementById('open-mo')
const modalwrap = document.querySelector('modal-wrap')

buttonOpenMo.onclick = function () {
  modalwrap.classList.remove('invisible')
}
