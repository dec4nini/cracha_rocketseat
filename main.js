const links_social_media = {
  github: 'dec4nini',
  youtube: 'channel/UCJJ8ySYLXJZ_wiYBHSaBdkQ',
  facebook: 'eduardo.decanini',
  instagram: 'edu_decanini',
  twitter: 'edu_decanini'
}
function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}

change_social_media_links()

function get_GitHub_Profil_Info() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_link.href = data.html_url
      user_avatar.src = data.avatar_url
      user_login.textContent = data.login
    })
}

get_GitHub_Profil_Info()
