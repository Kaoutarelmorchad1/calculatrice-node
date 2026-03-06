pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
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

    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
    }
}
