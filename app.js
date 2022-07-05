let studentList = [
	{
		name: "Ha",
		gender: 'female',
		poin: 8
	},
	{
		name: "Huy",
		gender: 'male',
		poin: 9
	},
	{
		name: "Hung",
		gender: 'male',
		poin: 7
	},
	{
		name: "Phuong",
		gender: 'female',
		poin: 6
	},
	{
		name: "Huyen",
		gender: 'female',
		poin: 10
	},
	{
		name: "Long",
		gender: 'male',
		poin: 5
	},
	{
		name: "Luan",
		gender: 'male',
		poin: 10
	},
	{
		name: "Linh",
		gender: 'female',
		poin: 8
	}

  ];

  let totalMalePoint = 0
  let totalFemalePoint = 0
  let totalMale = 0
  let totalFemale = 0
  for (const student of studentList) {
      if (student.gender=='male') {
          totalMale++
          totalMalePoint += student.poin
      }
      else {
          totalFemale++
          totalFemalePoint +=student.poin
      }
  }
  console.log('Average point of male = '+totalMalePoint/totalMale)
  console.log('Average point of female = '+totalFemalePoint/totalFemale)