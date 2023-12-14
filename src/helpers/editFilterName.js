export const editFilterName = filter => {
  let changedFilter = '';
  switch (filter) {
    case 'Muscles':
      changedFilter = 'muscles';
      break;

    case 'Equipment':
      changedFilter = 'equipment';
      break;

    default:
      changedFilter = 'bodypart';
      break;
  }
  return changedFilter;
};
