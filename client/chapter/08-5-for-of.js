/* ---------------------------------------------------------------------- */
/* For Of Loop                                                            */
/* ---------------------------------------------------------------------- */

/* JSON = JavaScript Object Notation */
// string, array, array like object = iterable 
const languages = [
  {
    id: 'ecma-262',
    name: 'JavaScript',
    creator: 'Brendan Eich',
    createAt: 1995,
    standardName: 'ECMA-262',
    currentVersion: 2022,
  },
  {
    id: 'java',
    name: 'Java',
    creator: 'James Gosling',
    createAt: 1995,
    standardName: null,
    currentVersion: 18,
  },
  {
    id: 'ecma-334',
    name: 'C#',
    creator: 'Anders Hejlsberg',
    createAt: 2000,
    standardName: 'ECMA-334',
    currentVersion: 8,
  },
];

{
  // 유사 배열 객체
  // 배열과 같은 특징을 보이는 객체
  // const arrayLike = {
  //   0: document.body,
  //   1: document.head,
  //   2: document.documentElement,
  //   length: 3,
  //   [Symbol.iterator]() { ... }
  // };
}

// 배열 뿐만 아니라, 문자 값도 for...of 문을 사용할 수 있을까요? Yes
let pseudoArray = '유사 배열';

// for ~ of 문
// for (const language of languages) {
//   console.table(language);
// }

// - 특정 조건에서 건너띄기 (continue)
//   Java는 제외
// for (const language of languages) {
//   let languageName = language.name.toLowerCase();
//   if (languageName.includes('java') && languageName.length === 4) {
//     continue;
//   }
//   console.table(language);
// }

// - 특정 조건에서 중단하기 (break)
//   C#에서 중단 (C# 언어는 출력 ✕)
// for (const language of languages) {
//   let languageName = language.name.toLowerCase();
//   if (languageName.includes('c#')) {
//     break;
//   }
//   console.table(language);
// }




const randomUser = {
  gender: 'female',
  name: { title: 'Ms', first: 'Carol', last: 'May' },
  location: {
    street: { number: 9162, name: 'Church Road' },
    city: 'Birmingham',
    state: 'Cumbria',
    country: 'United Kingdom',
    postcode: 'FO5E 4TN',
    coordinates: { latitude: '-4.3301', longitude: '155.0223' },
    timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
  },
  email: 'carol.may@example.com',
  login: {
    uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
    username: 'redduck745',
    password: 'picks',
    salt: '8xzqOzAn',
    md5: '7250e4042c2367cc82487f798c7c5253',
    sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
    sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
  },
  dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
  registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
  phone: '022 1280 9236',
  cell: '07653 428700',
  id: { name: 'NINO', language: 'SH 44 98 72 L' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/21.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
  },
  nat: 'GB',
};

// 객체의 키, 값 순환
// - for ~ in 문

{
  // Level 1 
  for (const key in randomUser) {
    if (Object.hasOwnProperty.call(randomUser, key)) {
      const l1Value = randomUser[key];
      console.log('L1 : ', key);
      if(l1Value && typeof l1Value === 'object') {
        // Level 2 
        for (const key in l1Value) {
          if (Object.hasOwnProperty.call(l1Value, key)) {
            const l2Value = l1Value[key];
            console.log('L2 : ', key);
            if(l2Value && typeof l2Value === 'object') {
              // Level 3
              for (const key in l2Value) {
                if (Object.hasOwnProperty.call(l2Value, key)) {
                  const l3Value = l2Value[key];
                  console.log('L3 : ', key);
                }
              }
            }
          }
        }
      }
    }
  }
}

// 객체의 키, 값 순환
// - for ~ of 문

// key만 순환
// for (const key of Object.keys(randomUser)) {
//   console.log(key);
// }

// value만 순환
// for (const value of Object.values(randomUser)) {
//   console.log(value);
// }

// [key, value] 순환
for(const keyValue of Object.entries(randomUser)) {
  const key = keyValue[0];
  const value = keyValue[1];
  console.log('L1 : ', key);
  if(value && typeof value === 'object') {
    for(const keyValue of Object.entries(value)) {
      const key = keyValue[0];
      const value = keyValue[1];
      console.log('\tL2 : ', key);
      if(value && typeof value === 'object') {
        for(const keyValue of Object.entries(value)) {
          const key = keyValue[0];
          const value = keyValue[1];
          console.log('\t\tL3 : ', key);
        }
      }
    }
  }
}

// - 성능 비교 진단