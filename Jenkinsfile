pipeline {
  agent any
  tools {nodejs "node"}  
  stages {        
    stage('git_clone') {
      steps {
        git 'https://github.com/krishnaprasadkv/Nodejs.git'
      }
    }        
    stage('npm_install') {
      steps {
        // For installing npm
        sh 'npm install'
      }
    }     
    stage('npm_test') {
      steps {
        // For Test sample application.  
         sh 'npm test'
      }
    }      
  }
}
