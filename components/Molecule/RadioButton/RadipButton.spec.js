import {shallowMount} from "@vue/test-utils";
import "@vue/test-utils"
import RadioButton from "@/components/Molecule/RadioButton/RadioButton";
import {findItemToArray} from "@/helper/Array";

describe("RadioButton.vue", () => {
  const lists = ["버튼1", "버튼2", "버튼3", "버튼4"];
  const RadioButtonWrapper = shallowMount(RadioButton, {
    propsData: {
      lists
    }
  });
  it("라디오 버튼이 정상적으로 마운트되는가", () => {
    expect(RadioButtonWrapper.exists()).toBe(true);
  })
  it("라디오 버튼에 배열이 props 로 전달될 경우 정상적으로 해당 컴포넌트가 생성이 되는가?", async () => {
    //given
    const buttonsWrapper = await RadioButtonWrapper.findAll('[data-test="button"]');
    //when

    //then
    expect(buttonsWrapper).toHaveLength(lists.length);
    expect(buttonsWrapper.at(0).text()).toBe(lists[0])
    expect(buttonsWrapper.at(1).text()).toBe(lists[1])
    expect(buttonsWrapper.at(2).text()).toBe(lists[2])
  })
  it("라디오 버튼중 하나를 클릭하였을 경우 해당 버튼의 클래스가 checked로 변경이 되는가?", async () => {
    //given
    const buttonsWrapper = await RadioButtonWrapper.findAll('[data-test="button"]');
    const testButton = buttonsWrapper.at(0);

    //when
    await testButton.vm.$emit("click"); // 테스트를 진행할 버튼을 클릭

    //then
    expect(findItemToArray(buttonsWrapper.at(0).classes(), "checked")).toBeTruthy();
  })
  it("라디오 버튼중 하나를 클릭하였을 경우 기존에 checked 클래스를 가진 컴포넌트가 unchecked로 변경이 되는가?", async () => {
    //given
    const buttonsWrapper = await RadioButtonWrapper.findAll('[data-test="button"]');

    const firstClickedButton = buttonsWrapper.at(0); // 처음으로 클릭할 버튼
    const nextClickedButton = buttonsWrapper.at(1);  // 다음으로 클릭할 버튼
    //when
    //처음 버튼을 클릭했을 경우 해당 버튼의 클래스는 checked를 가지지만 다른 버튼들은 unchecked를 가지고 있음.
    firstClickedButton.vm.$emit("click");
    expect(findItemToArray(firstClickedButton.classes(), "checked")).toBeTruthy();
    expect(findItemToArray(nextClickedButton.classes(), "unchecked")).toBeTruthy();

    // 맨 처음 누른 버튼은 check옵션이 없이지고 unchecked옵션으로 변경되며 그다음에 누른 버튼은 unchecked클래스에서 checked클래스로 변경된다.
    nextClickedButton.vm.$emit("click");
    expect(findItemToArray(firstClickedButton.classes(), "checked")).toBeTruthy();
    expect(findItemToArray(nextClickedButton.classes(), "unchecked")).toBeTruthy();
    //then
  })
})
