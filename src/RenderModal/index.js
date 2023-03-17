import { Base_URL } from '../../main'
import { GetData } from '../GetApi'
const RenderModal = data => {
  const modal = document.getElementById('modal')
  modal.innerHTML = ''
  return GetData(Base_URL, `nobat?docId=${data.id}`).then(response => {
    const modalContent = `
      <div class="flex gap-5 items-center">
        <div class="w-24 h-24">
          <img
            class="rounded-full"
            src="src/assets/img/doctor-1-1.jpg"
            alt="doctor" />
        </div>
        <div class="flex flex-col gap-6 mt-7">
          <div class="flex gap-3">
            <span>نام:</span>
            <span id="docName">${data.name}</span>
          </div>
          <div class="flex gap-3">
            <span>تخصص:</span>
            <span id="docExp">${data.Expretise.name}</span>
          </div>
        </div>
      </div>
      <div class='mt-8'>
        <div class="pb-5 text-2xl flex justify-center">
          <h1>رزرو نوبت</h1>
        </div>
        <form
          id="form"
          action="#"
          class="bg-gray-200 py-4 px-4 rounded-md flex flex-col gap-6">
          <div class="flex gap-7">
            <input
              class="w-1/2 px-3 py-1 rounded-md outline-none border-none"
              name="firstName"
              type="text"
              placeholder="نام" />
            <input
              class="w-1/2 px-3 py-1 rounded-md outline-none border-none"
              name="lastName"
              type="text"
              placeholder="نام خانوادگی" />
          </div>
          <div class="mr-36">
            <input
              class="w-2/3 px-3 py-1 rounded-md outline-none border-none"
              name="phoneNumber"
              type="tel"
              placeholder="شماره موبایل بیمار" />
          </div>
          <div class="flex gap-5 flex-wrap justify-center">
          ${[
            ...data.workTime.map(item => {
              if (response.find(res => res.day === item)) {
                return `<button
                type="submit"
                name="day"
                disabled
                class="bg-gray-400 shadow-md px-3 py-1 text-white rounded-md text-2xl">
                ${item}
              </button>`
              } else {
                return `<button
              type="submit"
              name="day"
              class="bg-cardButton shadow-md px-3 py-1 text-white rounded-md text-2xl">
              ${item}
            </button>`
              }
            }),
          ].join(' ')}
          </div>
          </form>
          </div>`
    modal.innerHTML = modalContent
    return response
  })
}

export default RenderModal
