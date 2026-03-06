pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Kaoutarelmorchad1/calculatrice-node.git'
            }
        }
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Build Node.js application'
            }
        }
        stage('Run Server') {
            steps {
                bat 'start /B node serveur.js'
            }
        }
    }
}
