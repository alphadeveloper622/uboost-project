const categoryIcon: { [key: string]: string } = {
  Medical: '/images/campaigns/category/medical.svg',
  Legal: '/images/campaigns/category/legal.svg',
  Finance: '/image/campaigns/category/finance.svg',
  Education: '/images/campaigns/category/education.svg',
  Environment: '/images/campaigns/category/environment.svg',
  Sports: '/images/campaigns/category/sport.svg',
  Science: '/images/campaigns/category/science.svg',
  Technology: '/images/campaigns/category/technology.svg',
}

const getCampaignIcon = (category: string): string => {
  var url;
  switch (category) {
    case 'Medical':
      url = categoryIcon.Medical;
      break;
    case 'Legal':
      url = categoryIcon.Legal;
      break;
    case 'Finance':
      url = categoryIcon.Finance;
      break;
    case 'Education':
      url = categoryIcon.Education;
      break;
    case 'Environment':
      url = categoryIcon.Environment;
      break;
    case 'Sports':
      url = categoryIcon.Sports;
      break;
    case 'Science':
      url = categoryIcon.Science;
      break;
    case 'Technology':
      url = categoryIcon.Technology;
      break;
    default:
      url = ''; // or a default URL if you have one
      break;
  }
  return url;
}

export default getCampaignIcon;