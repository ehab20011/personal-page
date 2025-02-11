pipeline {
    agent any

    environment {
        NODE_VERSION = '18'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'master', url: 'https://github.com/ehab20011/personal-page.git'
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

        stage('Push Changes to GitHub') {
            steps {
                script {
                    sh '''
                    git config --global user.email "your-email@example.com"
                    git config --global user.name "Ehab Abdalla"

                    # Check if there are changes before committing
                    if ! git diff --quiet; then
                        git add .
                        git commit -m "Automated build commit from Jenkins"
                        git push origin master
                    else
                        echo "No changes detected, skipping commit and push."
                    fi
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "Changes pushed to GitHub. Vercel will now deploy automatically!"
        }
        failure {
            echo "Build failed. Check logs."
        }
    }
}
