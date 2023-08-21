const getStudent = () => {
  return {
     'name': 'John Williamson',
      'age': 9,
      'std': 3,
      'subjects': ['Maths', 'English', 'EVS'],
      'parents': {
        'father': 'Brown Williamson',
        'mother': 'Sophia',
        'email': 'john-parents@abcde.com'
      },
      'address': {
        'street': '65/2, brooklyn road',
        'city': 'Carterton',
        'country': 'New Zealand',
        'zip': 5791
      }
  }
 }

 const { name, subjects, age} = getStudent();
 console.log(name, age, subjects);

 const getStudentInfo = key => {
  const {[key]: value} = student;
  return value;
}