const titleInput      = document.querySelector('#titleInput'),
    urlInput          = document.querySelector('#urlInput'),
    iframeInput       = document.querySelector('#iframeInput'),
    channelTitleInput = document.querySelector('#channelTitleInput'),
    submitBtn         = document.querySelector('#submitBtn'),
    adminForm         = document.querySelector('.add-form-video'),
    checkedButtons    = document.querySelectorAll('.right-side-list li span'),
    checkedLists      = document.querySelectorAll('.right-side-list li')

let active = 1
for (let index in checkedButtons) {
    checkedButtons[index].onclick = () => {
        active = +index + 1
        checkedLists[index].classList.toggle('active')
        let i = 0
        for (let element of checkedLists) {
            if (index == i) {
                i++
                continue
            }
            element.classList.remove('active')
            i++
        }
    }
}

adminForm.onsubmit = (e) => {
    e.preventDefault()
    iframePoster = urlInput.value.trim()
    iframe = iframeInput.value.trim()
    iframeTitle = titleInput.value.trim()
    iframeImgNumber = active
    iframeChannelTitle = channelTitleInput.value.trim()
    iframesList.push({iframePoster, iframe, iframeTitle, iframeImgNumber, iframeChannelTitle})
    window.localStorage.setItem('iframes', JSON.stringify(iframesList))
    urlInput.value = null    
    iframeInput.value = null
    titleInput.value = null
    channelTitleInput.value = null    
    for (let element of checkedLists) {
        element.classList.remove('active')
    }
}