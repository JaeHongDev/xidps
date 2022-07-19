const obj =
  [
    {
      name: '.git',
    },
    {
      name: 'public',
      children: [
        {
          name: 'static',
          children: [{
            name: 'logo.png',
            file: 'png',
          }],
        },
        {
          name: 'favicon.ico',
          file: 'png',
        },
        {
          name: 'index.html',
          file: 'html',
        },
      ],
    },

    {
      name: 'README.md',
      file: 'md',
    },
  ];
const expected =
  [
    {
      name: '.git',
    },
    {
      name: 'public',
      children: [
        {
          name: 'static',
          children: [{
            name: 'logo.png',
            file: 'png',
          }],
        },
        {
          name: 'favicon.ico',
          file: 'png',
        },
        {
          name: 'index.html',
          file: 'html',
        },
      ],
    },

    {
      name: 'read',
      file: 'md',
    },
  ];
const expected1 =
  [
    {
      name: '.git',
    },
    {
      name: 'public',
      children: [
        {
          name: 'static22',
          children: [{
            name: 'logo.png',
            file: 'png',
          }],
        },
        {
          name: 'favicon.ico',
          file: 'png',
        },
        {
          name: 'index.html',
          file: 'html',
        },
      ],
    },

    {
      name: 'read',
      file: 'md',
    },
  ];
const recursiveObj = (arr, name, replaceName) => {
  let index = arr.findIndex(item => item.name === name)
  if (index !== -1) {
    arr.splice(index, 1, {
      ...arr[index],
      name: replaceName
    })
    return arr;
  }
  arr.forEach((item)=>{
    if(item.children){
      recursiveObj(item.children,name,replaceName);
    }
  })
  return arr;
}
describe('test', () => {
  it("test", () => {
    recursiveObj(obj, "README.md", "read");
    expect(obj).toStrictEqual(expected)
  })
  it("test1", () => {
    recursiveObj(obj, "static", "static22");
    expect(obj).toStrictEqual(expected1);
  })
});
