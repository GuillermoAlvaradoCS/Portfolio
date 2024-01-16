let profileMenu = document.getElementById('profileMenu')
let sidebarActivity = document.getElementById('sidebarActivity')
let moreLink = document.getElementById('showMoreLink')

function toggleMenu(){
    profileMenu.classList.toggle('open-menu')
}

function toggleActivity(){
    sidebarActivity.classList.toggle('open-activity')
    sidebarActivity.classList.contains('open-activity')?moreLink.innerHTML = 'Show Less <b>-</b>'
                                                        :moreLink.innerHTML = 'Show More <b>+</b>'
}
