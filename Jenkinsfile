pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/ehab20011/personal-page.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to GitHub Pages') {
            steps {
                script {
                    sh 'npm run deploy'
                }
            }
        }
    }

    post {
        success {
            echo "Build and deployment successful!"
        }
        failure {
            echo "Build failed. Please check the logs."
        }
    }
}
