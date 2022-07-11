import {shallowMount} from "@vue/test-utils";
import DataPagination from "@/components/Molecule/DataPagination/DataPagination";

describe('DataPagination.vue', () => {
  let dataPaginationWrapper;
  function getPagesWrapper() {
    return dataPaginationWrapper.findAll("[data-test='page-lists']");
  }
  beforeEach(()=>{
    dataPaginationWrapper = shallowMount(DataPagination);
  })
  it("DataPagination component 가 정상적으로 마운트 되는가",()=> {
    //given
    //when
    //then
    expect(dataPaginationWrapper.exists()).toBeTruthy();
  })

  it("DataPagination component가 랜더링 될경우 숫자 1이 표시된다.",async ()=>{
    //given
    await dataPaginationWrapper.setProps({
      nowPage: 1,
      maxContentSize:2,
      itemCount:1
    })
    //when
    const listWrapper = getPagesWrapper();
    //then
    expect(listWrapper).toHaveLength(2);
  })



  it("DataPagination component 에서 props 가 전달되지 않을때 1페이지만 표시된다.",()=>{
    //given
    const listWrapper = getPagesWrapper();
    //when

    //then
    expect(listWrapper).toHaveLength(1);
  })

  it("DataPagination component 에서 page 수가 10개가 넘어가면 10개만 보이도록 한다. ",async()=>{
    expect.assertions(1);
    await dataPaginationWrapper.setProps({
      maxContentSize:11,
      itemCount:1,
    })
    const listWrapper = getPagesWrapper();
    expect(listWrapper).toHaveLength(10);
  })

});

