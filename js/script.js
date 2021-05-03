const iframesListWrapper = document.querySelector('.iframes-list')
function viewsRandom () {
    return Math.floor(Math.random() * 1000) + 1;
}
function hoursRandom () {
    return Math.floor(Math.random() * 24) + 1;
}
function iframesRenderer (database) {
    iframesListWrapper.innerHTML = null
    let displayList = database.map((item) => {
        return `
            <li class="iframe">
                <a href="#">
                    <img src="${item.iframePoster}" alt="poster" class="poster-img">
                    ${item.iframe}
                    <button class="watch-later">
                        <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                    </button>
                    <button class="add-queue-btn">
                        <svg viewbox="0 0 24 24" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                    </button>
                    <div class="iframe-footer">
                        <img src="img/channel${item.iframeImgNumber}.jpg" alt="channel-icon">
                        <div class="iframe-footer-text">
                            <h3 class="iframe-title">${item.iframeTitle}</h3>
                            <h3 class="channel-name">
                                <span>${item.iframeChannelTitle}</span>
                                <span>
                                    <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 13px; height: 13px;"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"></path></g></svg>
                                </span>
                            </h3>
                            <p class="views">${viewsRandom()}K views <span>•</span> ${hoursRandom()}hours ago</p>
                        </div>
                        <button class="more-btn">
                            <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g></svg>
                        </button>                             
                    </div>
                    <div class="more-btn-details-box hide">
                        <ul class="details-box-list">
                            <li><a href="#">
                                <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                                <span>Add to queue</span>
                            </a></li>
                            <li><a href="#">
                                <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                                <span>Save to Watch Later</span>
                            </a></li>
                            <li><a href="#">
                                <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" ></path></g></svg>
                                <span>Save to playlist</span>
                            </a></li>
                        </ul>
                        <ul class="details-box-list">
                            <li><a href="#">
                                <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g></svg>
                                <span>Not interested</span>
                            </a></li>                
                            <li><a href="#">
                                <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g></svg>
                                <span>Don't recommend channel</span>
                            </a></li>
                            <li><a href="#">
                                <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g></svg>
                                <span>Report</span>
                            </a></li>
                            <li class="delete-btn"><a href="#">
                                <img src="img/delete.png" alt="delete" width="24px" height="24px">
                                <span>Delete</span>
                            </a></li>
                        </ul>
                    </div>
                </a>
            </li>
        `
    })
    displayList = displayList.join('')
    iframesListWrapper.innerHTML = displayList
}

iframesRenderer(iframesList)
const deleteButtons = document.querySelectorAll('.delete-btn')
for (let index in deleteButtons) {
    deleteButtons[index].onclick = () => {
        if (index > -1) {
            iframesList.splice(index, 1);
        }
        iframesRenderer(iframesList)
        window.localStorage.setItem('iframes', JSON.stringify(iframesList))
        window.location.reload(true)
    }
}

const toggleMenu    = document.querySelector('.toggle-menu'),
    leftMenuWrapper = document.querySelector('.left-menu-wrapper'),
    miniMenuWrapper = document.querySelector('.mini-menu-wrapper'),
    showFewer       = document.querySelector('.show-fewer'),
    showMore        = document.querySelector('.show-more'),
    listSubscript   = document.querySelector('.navbar-list-subsc'),
    sliderPrevious  = document.querySelector('.slider-previous'),
    sliderNext      = document.querySelector('.slider-next'),
    topNavSlider    = document.querySelector('.top-nav-slider'),
    sliderWrapper   = document.querySelector('.topnav-slider-links'),
    moreButtons     = document.querySelectorAll('.more-btn'),
    moreWrappers    = document.querySelectorAll('.more-btn-details-box'),
    posterImages    = document.querySelectorAll('.poster-img'),
    modalBox        = document.querySelector('.modal-box'),
    closeButton     = document.querySelector('.close-btn'),
    iframeWrapper   = document.querySelector('.iframe-show'),
    iframesWrapper  = document.querySelector('.iframes-wrapper'),
    searchInputs    = document.querySelectorAll('.search-input')
    
toggleMenu.onclick = () => {
    toggleMenu.classList.add('click')
    for (let element of moreWrappers) {
        element.classList.toggle('click')
    }
    setTimeout(() => {
        toggleMenu.classList.remove('click')
    }, 200)
    iframesWrapper.classList.toggle('click')
    leftMenuWrapper.classList.toggle('hide') 
    miniMenuWrapper.classList.toggle('hide')
}
showMore.onclick = () => {
    listSubscript.style.height = 'auto'
    showMore.style.display = 'none'
}
showFewer.onclick = () => {
    listSubscript.style.height = '366.8px'
    showMore.style.display = 'block'
}
for (let index in moreButtons) {
    moreButtons[index].onclick = () => {
        moreWrappers[index].classList.toggle('hide')
        let i = 0
        for (let element of moreWrappers) {
            if (index == i) {
                i++
                continue
            }
            element.classList.add('hide')
            i++
        }
    }
}


for (let i = 0; i < posterImages.length; i++) {
    let iframes = document.querySelectorAll('iframe')
    posterImages[i].onclick = () => {
        modalBox.classList.remove('close')
        iframeWrapper.innerHTML = iframesList[i].iframe
        let iframe = iframeWrapper.childNodes[0]
        let source = iframe.src
        iframe.src = `${source}?autoplay=1`
        closeButton.onclick = () => {
            modalBox.classList.add('close')
            iframe.src = source
        }
    }
}

let voiceButtons = document.querySelectorAll('.voice-btn')
let voiceBox = document.querySelector('.voice-modal-box')
let SpeechRecognition = window.webkitSpeechRecognition
let voice = new SpeechRecognition()
voice.lang = "en: En"
voice.continuous = false

for (let element of voiceButtons) {
    element.onclick = () => {
        let li = ""
        voiceBox.classList.remove('hide')
        let voicecloseButton = document.querySelector('.voice-close-btn')
        voicecloseButton.onclick = () => {
            voiceBox.classList.add('hide')
        }
        voice.start()
        voice.onresult = (event) => {
            iframesListWrapper.innerHTML = null
            search(event.results[0][0]['transcript'], li)
            let title = search(event.results[0][0]['transcript'], li)
            console.log(title);
            if (title == "") {
                alert("searched word not found you search [" +  event.results[0][0]['transcript'] + "]")
                iframesRenderer(iframesList)
            }
            console.log(event.results[0][0]['transcript']);
        }
        voice.onspeechend = function() {
            voice.stop()
            voiceBox.classList.add('hide')
        }
    }
}


for (let element of searchInputs) {
    element.onkeyup = (event) => {
        let li = ""
        if (element.value != '') {
            iframesListWrapper.innerHTML = null
            search(event.target.value.toLowerCase(), li)
        } else {
            iframesListWrapper.innerHTML
            iframesRenderer(iframesList)
        }
    }
}

function search (str, li) {
    for (let item of iframesList) {
        let found = item.iframeTitle
        let startIndex = found.toLowerCase().search(str)
        if (found.toLowerCase().includes(str)) {
            let initWord     = found.slice(found[0], startIndex)
            let searchedWord = found.slice(startIndex, startIndex + str.length)
            let endWord      = found.slice(startIndex + str.length, found.length)
            li += `
                <li class="iframe">
                    <a href="#">
                        <img src="${item.iframePoster}" alt="poster" class="poster-img">
                        <button class="watch-later">
                            <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                        </button>
                        <button class="add-queue-btn">
                            <svg viewbox="0 0 24 24" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                        </button>
                        <div class="iframe-footer">
                            <img src="img/channel${item.iframeImgNumber}.jpg" alt="channel-icon">
                            <div class="iframe-footer-text">
                                <h3 class="iframe-title">${initWord}<mark>${searchedWord}</mark>${endWord}</h3>
                                <h3 class="channel-name">
                                    <span>${item.iframeChannelTitle}</span>
                                    <span>
                                        <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 13px; height: 13px;"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z"></path></g></svg>
                                    </span>
                                </h3>
                                <p class="views">${viewsRandom()}K views <span>•</span> ${hoursRandom()}hours ago</p>
                            </div>
                            <button class="more-btn">
                                <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g></svg>
                            </button>                             
                        </div>
                        <div class="more-btn-details-box hide">
                            <ul class="details-box-list">
                                <li><a href="#">
                                    <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M9,10 L18,10 L18,12 L9,12 L9,10 Z M6,6 L18,6 L18,8 L6,8 L6,6 Z M12,14 L18,14 L18,16 L12,16 L12,14 Z M6,12 L6,18 L10,15 L6,12 Z"></path></g></svg>
                                    <span>Add to queue</span>
                                </a></li>
                                <li><a href="#">
                                    <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"></path></g></svg>
                                    <span>Save to Watch Later</span>
                                </a></li>
                                <li><a href="#">
                                    <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" ></path></g></svg>
                                    <span>Save to playlist</span>
                                </a></li>
                            </ul>
                            <ul class="details-box-list">
                                <li><a href="#">
                                    <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"></path></g></svg>
                                    <span>Not interested</span>
                                </a></li>                
                                <li><a href="#">
                                    <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g></svg>
                                    <span>Don't recommend channel</span>
                                </a></li>
                                <li><a href="#">
                                    <svg viewbox="0 0 24 24" focusable="false" style="pointer-events: none; display: block; width: 24px; height: 24px;"><g><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g></svg>
                                    <span>Report</span>
                                </a></li>
                                <li class="delete-btn"><a href="#">
                                    <img src="img/delete.png" alt="delete" width="24px" height="24px">
                                    <span>Delete</span>
                                </a></li>
                            </ul>
                        </div>
                    </a>
                </li>
            `
            iframesListWrapper.innerHTML = li
        }
    }
    return li
}

let resposiveSearchButton = document.querySelector('.header-right .search-btn')
let header = document.querySelector('.header')
let headerResponsiveBox = document.querySelector('.header-responsive')
let backButton = document.querySelector('.back-button')
resposiveSearchButton.onclick = () => {
    header.classList.add('hide')
    headerResponsiveBox.classList.remove('hide')
}
backButton.onclick = () => {
    header.classList.remove('hide')
    headerResponsiveBox.classList.add('hide')
}