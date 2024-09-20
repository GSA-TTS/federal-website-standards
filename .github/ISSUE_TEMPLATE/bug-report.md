name: Bug Report 🐞
description: Report a bug and help us improve this website.
title: "Federal website standards - Bug: [YOUR TITLE]"
labels: ['Type: Bug','Needs: Confirmation']
body:
  - type: textarea
    id: problem
    attributes:
      label: Describe the bug
      description: Add a clear and concise description of the bug.
    validations:
      required: true
  - type: textarea
    id: reproduce
    attributes:
      label: Steps to reproduce the bug
      description: Describe how to reproduce this issue.
      placeholder: |
        1. Go to '...'
        2. Click on '....'
        3. Scroll down to '....'
        4. See error...
    validations:
      required: true
  - type: textarea
    id: expectation
    attributes:
      label: Expected behavior
      description: Add a clear and concise description of what you expected to happen.
    validations:
      required: true
    
