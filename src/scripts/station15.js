async function getData() {  const userList = [
  { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
  { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
];
await delay(3000);

// Map the user list and build full names
const result = userList.map(buildFullName);
return result;
}

function buildFullName(data) {
data.full_name = `${data.family_name} ${data.first_name}`;
return data;
}

function delay(ms) {
return new Promise((resolve) => {
  setTimeout(resolve, ms);
});
}

// Usage
getData().then(data => {
console.log(data);
});
