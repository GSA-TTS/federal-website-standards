document.addEventListener('DOMContentLoaded', () => {
  // Render all standards based on what's selected
  // Grab required-standards, pending-standards, draft-standards, research-standards to show/hide
  // Add click listeners to the four buttons

  const statusButtons = document.querySelectorAll('#status-selectors button');
  const requiredDiv = document.getElementById('required-standards');
  const pendingDiv = document.getElementById('pending-standards');
  const draftDiv = document.getElementById('draft-standards');
  const researchDiv = document.getElementById('research-standards');
  const selectAllButton = document.getElementById('select-all-standards');
  const noStatusesSelectedDiv = document.getElementById('no-statuses-selected');

  const yaClickedTheButton = (clickEvent) => {
    console.log('Yep, you clicked. Nice job.');
    const button = clickEvent.target;
    const status = button.dataset.status;
    let isSelected = (button.dataset.selected === true || button.dataset.selected === 'true');

    if (isSelected) {
      button.dataset.selected = false;
      isSelected = false;
    } else {
      button.dataset.selected = true;
      isSelected = true;
    }

    switch(status) {
      case 'required':
        button.classList.toggle('required-outline');
        if (isSelected) {
          requiredDiv.classList.remove('display-none');
        } else {
          requiredDiv.classList.add('display-none');
        }
        break;
      case 'pending':
        button.classList.toggle('pending-outline');
        if (isSelected) {
          pendingDiv.classList.remove('display-none');
        } else {
          pendingDiv.classList.add('display-none');
        }
        break;
      case 'draft':
        button.classList.toggle('draft-outline');
        if (isSelected) {
          draftDiv.classList.remove('display-none');
        } else {
          draftDiv.classList.add('display-none');
        }
        break;
      case 'research':
        button.classList.toggle('research-outline');
        if (isSelected) {
          researchDiv.classList.remove('display-none');
        } else {
          researchDiv.classList.add('display-none');
        }
        break;
    }

    const statuses = Array.from(statusButtons);
    // Should "Select All" be checked?
    const allStatusesSelected = !statuses.some(areUnselected);

    selectAllButton.checked = allStatusesSelected;

    // At least one status was unselected, check to see if they're all unselected
    if (!allStatusesSelected) {
      const everyStatusIsUnselected = statuses.every(areUnselected);

      if (everyStatusIsUnselected) {
        noStatusesSelectedDiv.classList.remove('display-none');
      } else {
        noStatusesSelectedDiv.classList.add('display-none');
      }
    }
  };

  const areUnselected = (button) => {
    return !(button.dataset.selected === true || button.dataset.selected === 'true');
  };

  const selectAll = (clickEvent) => {
    const clickedOn = clickEvent.target.checked;

    if (clickedOn) {
      statusButtons.forEach(button => {
        const status = button.dataset.status;
        button.dataset.selected = true;
        button.classList.remove(`${status}-outline`);
      });

      requiredDiv.classList.remove('display-none');
      pendingDiv.classList.remove('display-none');
      draftDiv.classList.remove('display-none');
      researchDiv.classList.remove('display-none');

      noStatusesSelectedDiv.classList.add('display-none');
    } else {
      statusButtons.forEach(button => {
        const status = button.dataset.status;
        button.dataset.selected = false;
        button.classList.add(`${status}-outline`);
      });

      requiredDiv.classList.add('display-none');
      pendingDiv.classList.add('display-none');
      draftDiv.classList.add('display-none');
      researchDiv.classList.add('display-none');

      noStatusesSelectedDiv.classList.remove('display-none');
    }
  };

  statusButtons.forEach(button => {
    button.addEventListener('click', yaClickedTheButton);
  });

  selectAllButton.addEventListener('click', selectAll);
});
