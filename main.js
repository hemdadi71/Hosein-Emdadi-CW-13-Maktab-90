'use strict'
import { GetData } from './src/GetApi'
import './src/index.css'
import RenderCard from './src/RenderCart'
import RenderModal from './src/RenderModal'
import { SetData } from './src/SetApi'
export const Base_URL = `http://localhost:3000`
export const endpoint = `doctors`
const modal = document.getElementById('modal')
const modalBg = document.getElementById('modal-bg')
const article = document.getElementById('article')
let targetId
GetData(Base_URL, endpoint).then(response => {
  RenderCard(response)
})

const handleSetData = e => {
  e.preventDefault()
  const item = {
    docId: targetId,
    firstName: e.currentTarget.firstName.value,
    lastName: e.currentTarget.lastName.value,
    phoneNumber: e.currentTarget.phoneNumber.value,
    day: e.submitter.innerText,
  }
  SetData(Base_URL, 'nobat', item).then(response => console.log(response))
}
const handleRezerve = e => {
  e.preventDefault()
  if (e.target.tagName !== 'BUTTON') return
  targetId = e.target.closest('#card').dataset.id
  GetData(Base_URL, endpoint, targetId).then(response => {
    modal.classList.remove('hidden')
    modalBg.classList.remove('hidden')
    RenderModal(response)
    const form = document.getElementById('form')
    form.addEventListener('submit', handleSetData)
  })
}
const handleHideModal = () => {
  modal.classList.add('hidden')
  modalBg.classList.add('hidden')
}
article.addEventListener('click', handleRezerve)
modalBg.addEventListener('click', handleHideModal)
