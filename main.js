'use strict'
import { debounce } from 'lodash'
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
const title = document.getElementById('title')
const ul = document.getElementById('ul')
const titleParent = document.getElementById('titleParent')
const search = document.getElementById('search')
let targetId
const handleShowAll = () => {
  GetData(Base_URL, endpoint).then(response => {
    RenderCard(response)
  })
}
handleShowAll()
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
  handleHideModal()
}
const handleHideModal = () => {
  modal.classList.add('hidden')
  modalBg.classList.add('hidden')
}
const handleRezerve = e => {
  e.preventDefault()
  if (e.target.tagName !== 'BUTTON') return
  targetId = e.target.closest('#card').dataset.id
  GetData(Base_URL, endpoint, targetId).then(response => {
    modal.classList.remove('hidden')
    modalBg.classList.remove('hidden')
    RenderModal(response).then(() => {
      const form = document.getElementById('form')
      form.addEventListener('submit', handleSetData)
    })
  })
}
const handleShowDropDown = () => {
  ul.classList.remove('hidden')
}
const handleHideDropDown = () => {
  ul.classList.add('hidden')
}
const handleFilter = e => {
  if (e.target === ul) return
  const li = e.target.innerText
  GetData(Base_URL, `doctors?Expretise.name=${li}`).then(response => {
    RenderCard(response)
  })
}
const handleSearch = e => {
  console.log(e);
  const searchValue = e.target.value
  GetData(Base_URL, `doctors?q=${searchValue}`).then(response => {
    RenderCard(response)
    
  })
}
article.addEventListener('click', handleRezerve)
modalBg.addEventListener('click', handleHideModal)
title.addEventListener('mouseenter', handleShowDropDown)
titleParent.addEventListener('mouseleave', handleHideDropDown)
ul.addEventListener('click', handleFilter)
title.addEventListener('click', handleShowAll)
search.addEventListener(
  'keyup',
  debounce((e) => {
    handleSearch(e)
  }, 1000)
)
