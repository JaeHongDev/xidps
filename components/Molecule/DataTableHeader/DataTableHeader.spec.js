import DataTableHeader from "@/components/Molecule/DataTableHeader/DataTableHeader";
import { shallowMount } from "@vue/test-utils";

describe("DataTableHeader", () => {
  let DataTableHeaderWrap;

  beforeEach(() => {
    DataTableHeaderWrap = shallowMount(DataTableHeader);
  });
  it("DataTableHeader 컴포넌트가 정상적으로 랜더링 되는가", () => {
    expect(DataTableHeaderWrap.exists()).toBeTruthy();
  });
  it("DataTableHeader 컴포넌트의 props로 title과 count가 전달될 경우 정상적으로 화면에 표시된다.", async () => {
    await DataTableHeaderWrap.setProps({ title: "테스트제목", count: 1000 });

    const dataTableTitle = DataTableHeaderWrap.find("[data-test='title']");
    const dataTableCount = DataTableHeaderWrap.find("[data-test='count']");

    expect(dataTableTitle.text()).toBe("테스트제목");
    expect(dataTableCount.text()).toBe("TOTAL : 1000건");
  });
  it("DataTableHeader 컴포넌트의 props로 어떠한 값도 전달되지 않을 경우 default값이 표시되도록 한다.", () => {
    const dataTableTitle = DataTableHeaderWrap.find("[data-test='title']");
    const dataTableCount = DataTableHeaderWrap.find("[data-test='count']");

    expect(dataTableTitle.text()).toBe("명칭 없음");
    expect(dataTableCount.text()).toBe("TOTAL : 0건");
  });
});
