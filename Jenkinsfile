pipeline {
  agent any

  environment {
    // If using NodeJS plugin in Jenkins, make sure the tool name matches
    PATH = "${tool 'node-18'}/bin:${env.PATH}"
  }

  stages {
    stage('Checkout') {
      steps {
        // Pull code from Git
        git branch: 'main', url: 'https://github.com/your-username/your-repo.git' // Update this
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm ci' // Installs from package-lock.json
      }
    }

    stage('Run Accessibility Tests') {
      steps {
        sh 'npx cypress run --spec "cypress/e2e/accessibility.cy.js"'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: '**/a11y-report.json', allowEmptyArchive: true
    }

    failure {
      echo '❌ Build failed due to accessibility violations or Cypress errors.'
    }
  }
}
