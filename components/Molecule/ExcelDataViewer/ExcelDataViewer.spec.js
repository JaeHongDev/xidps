import ExcelDataViewer from "@/components/Molecule/ExcelDataViewer/ExcelDataViewer";
import { mount } from "@vue/test-utils";

describe("ExcelDataViewer", () => {
  it("ExcelDataViewer 컴포넌트가 정상적으로 랜더링 되는가", () => {
    const excelDataViewerWrap = mount(ExcelDataViewer);

    expect(excelDataViewerWrap.exists()).toBeTruthy();
  });
});
