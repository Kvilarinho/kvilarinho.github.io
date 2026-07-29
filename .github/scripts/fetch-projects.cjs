const https = require('https')
const fs = require('fs')

const USERNAME = 'Kvilarinho'
const TOKEN = process.env.GITHUB_TOKEN

const ALLOWED_FORKS = ['team_safety_monitor', 'Bullseye']

const CUSTOM_TITLES = {
    'kvilarinho.github.io': 'Personal Portfolio Website',
    'Concurrent-TCP-ChatServer': 'Concurrent TCP Chat',
    'Vanilla-Webserver': 'Vanilla HTTP Web Server',
    'Task-Manager': 'Task Manager (CLI)',
    'FinanceTracker': 'Finance Tracker (CLI)',
    'LibraryBookTracker': 'Library Book Tracker (CLI)',
    'team_safety_monitor': 'Team Safety Monitor',
    'Bullseye': 'Bullseye'
}

const CUSTOM_IMAGES = {
    'kvilarinho.github.io': '/img/projects/portfolio-website/portfolio-website.png',
    'Study-Clarify': '',
    'Concurrent-TCP-ChatServer': '/img/projects/concurrent-tcp-chatserver/concurrent-tcp-chatserver.jpeg',
    'Vanilla-Webserver': '/img/projects/vanilla-webserver/vanilla-webserver.jpeg',
    'Task-Manager': '/img/projects/task-manager/task-manager.jpeg',
    'FinanceTracker': '/img/projects/finance-tracker/Finance Tracker.jpg',
    'LibraryBookTracker': '/img/projects/library-book-tracker/Library Book Tracker.jpg',
    'team_safety_monitor': '/img/projects/team-safety-monitor/team-safety-monitor.png',
    'Bullseye': '/img/projects/bullseye/bullseye.jpeg'
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