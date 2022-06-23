import {findItemToArray} from "@/helper/Array/index";

describe("Array directory index.js",()=>{
  const array = ["item1","item2","item3"];

  it("배열 내에 한가지 항목이 존재한다면 참을 반환합니다.",()=>{
    expect( findItemToArray(array,"item1")).toBeTruthy();
  })
  it("배열 항목중에서 존재하지 않는 항목이 있다면 거짓을 반환합니다.",()=>{
    expect(findItemToArray(array,"item4")).toBeFalsy();
  })
} )
