const https = require('https')
const fs = require('fs')

const USERNAME = 'Kvilarinho'
const TOKEN = process.env.GITHUB_TOKEN

const CUSTOM_TITLES = {
  'kvilarinho.github.io': 'Personal Portfolio Website',
  'Concurrent-TCP-ChatServer': 'Concurrent TCP Chat',
  'Vanilla-Webserver': 'Vanilla HTTP Web Server',
  'Task-Manager': 'Task Manager (CLI)',
  'FinanceTracker': 'Finance Tracker (CLI)',
  'LibraryBookTracker': 'Library Book Tracker (CLI)'
}

const CUSTOM_IMAGES = {
  'kvilarinho.github.io': '/img/projects/portfolio-website/portfolio-website.png',
  'Study-Clarify': '',
  'Concurrent-TCP-ChatServer': '/img/projects/concurrent-tcp-chatserver/concurrent-tcp-chatserver.jpeg',
  'Vanilla-Webserver': '/img/projects/vanilla-webserver/vanilla-webserver.jpeg',
  'Task-Manager': '/img/projects/task-manager/task-manager.jpeg',
  'FinanceTracker': '/img/projects/finance-tracker/Finance Tracker.jpg',
  'LibraryBookTracker': '/img/projects/library-book-tracker/Library Book Tracker.jpg'
}

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'User-Agent': 'portfolio-action',
        'Accept': 'application/vnd.github.v3+json'
      }
    }, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => resolve(JSON.parse(data)))
    }).on('error', reject)
  })
}

async function main() {
  const repos = await get(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`)

  const projects = []

  for (const repo of repos) {
    if (repo.private || repo.fork) continue

    let readme = ''
    try {
      const readmeData = await get(`https://api.github.com/repos/${USERNAME}/${repo.name}/readme`)
      readme = Buffer.from(readmeData.content, 'base64').toString('utf-8')
    } catch (e) {
      readme = ''
    }

    projects.push({
      slug: repo.name,
      title: CUSTOM_TITLES[repo.name] || repo.name.replace(/-/g, ' '),
      description: repo.description || '',
      tags: repo.topics || [],
      language: repo.language || '',
      github: repo.html_url,
      stars: repo.stargazers_count,
      updatedAt: repo.updated_at,
      image: CUSTOM_IMAGES[repo.name] || '',
      readme
    })
  }

  fs.mkdirSync('src/data', { recursive: true })
  fs.writeFileSync('src/data/projects.json', JSON.stringify(projects, null, 2))
  console.log(`Saved ${projects.length} projects`)
}

main()
