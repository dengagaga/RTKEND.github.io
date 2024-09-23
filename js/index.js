  const buttonMobileNav = document.querySelector('.burger-btn')
  const mobileNav = document.querySelector('.mobile-menu')

  function clickHandlerButtonMobileNav () {
    buttonMobileNav.classList.toggle('burger-btn--active')
    mobileNav.classList.toggle('mobile-menu--active')
  }

  buttonMobileNav.addEventListener('click', clickHandlerButtonMobileNav)
  
  const buttonSupportPopup = document.querySelector('.btn-pop-up')
  const supportPopup = document.querySelector('.pop-up')

  function clickHandlerButtonSupportPopup () {
    supportPopup.classList.toggle('pop-up--active')
  }
  function clickHandlerSupportPopup(e) {
    console.log(e.target)
    if (e.target === supportPopup) supportPopup.classList.remove('pop-up--active')
  }

  buttonSupportPopup.addEventListener('click', clickHandlerButtonSupportPopup)
  supportPopup.addEventListener('click', clickHandlerSupportPopup)

  // accordeon
  // для того, чтобы срабатывал клик именно по faq__item в css на внутренних элментах faq__item должен быть pointer-events: none
  const accordeonItems = document.querySelectorAll(`[data-accordeon]`)
  const accordeons = document.querySelectorAll('.faq__list')

  function handlerAccordeonClick(e) {
    if (e.target.classList.contains('faq__item')) {
      console.log('click')
      if (e.target.classList.contains('faq__item--active')) {
        e.target.classList.remove('faq__item--active')
        const content = e.target.querySelector('.faq__item-content')
        content.style.maxHeight = '0'
      } else {
        accordeonItems.forEach(item => {
          item.classList.remove('faq__item--active')
          const content = item.querySelector('.faq__item-content')
          content.style.maxHeight = '0'
        })
        e.target.classList.add('faq__item--active')
        const content = e.target.querySelector('.faq__item-content')
        content.style.maxHeight = content.scrollHeight + "px"
      }
    }
  }

  if (accordeons) accordeons.forEach(accordeon => accordeon.addEventListener('click', handlerAccordeonClick))