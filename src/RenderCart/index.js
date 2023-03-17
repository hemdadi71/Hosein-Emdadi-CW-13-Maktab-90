const RenderCard = dataset => {
  const article = document.getElementById('article')
  article.innerHTML = ''
  dataset.map(item => {
    const card = `<div
    id=card data-id=${item.id}
    class="relative flex flex-col px-3 py-6 w-[200px] h-[235px] rounded-md bg-cardBG items-center gap-5">
    <div class="w-14 h-16">
      <img
        class="w-full h-full rounded-full"
        src="src/assets/img/doctor-1-1.jpg"
        alt="doctor" />
    </div>
    <div class="flex flex-col items-center text-white gap-3">
      <div class="flex gap-5">
        <span> نام:</span>
        <span>${item.name}</span>
      </div>
      <div class="flex gap-5">
        <span> تخصص:</span>
        <span>${item.Expretise.name}</span>
      </div>
    </div>
    <div class="bottom-[.5rem] left-[-3rem] w-full absolute">
      <button
        class=" rounded-full bg-cardButton text-white shadow-md px-5 py-1">
        رزرو پزشک
      </button>
    </div>
  </div>`
    article.innerHTML += card
  })
}

export default RenderCard
