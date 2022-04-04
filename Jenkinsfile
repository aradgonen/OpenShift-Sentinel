pipeline {
  agent {
    docker {
      args '-p 3000:3000'
      image 'node:lts-bullseye-slim'
    }

  }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
        sh 'npm install react-scripts'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deliver') {
      steps {
        input 'Finished using the web site? (Click "Proceed" to continue)'
      }
    }

  }
}